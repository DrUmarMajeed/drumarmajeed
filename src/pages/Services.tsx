import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Database, 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Zap,
  Globe,
  Shield,
  Cpu,
  Camera,
  TrendingUp,
  Bot,
  Search,
  Cloud,
  Code,
  Settings,
  Layers,
  Target,
  Sparkles,
  Rocket,
  Plus,
  Edit2,
  Trash2,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

interface Service {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: string;
  image?: string;
  featured: boolean;
}

const serviceSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title must be less than 200 characters"),
  description: z.string().min(1, "Description is required").max(1000, "Description must be less than 1000 characters"),
  tech: z.array(z.string()).min(1, "At least one technology is required").max(10, "Maximum 10 technologies allowed"),
  icon: z.string().min(1, "Icon is required"),
  image: z.string().optional(),
  featured: z.boolean(),
});

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    icon: "Brain",
    image: "",
    featured: false,
  });

  const { toast } = useToast();
  const { isAdmin } = useAuth();

  const iconMap: { [key: string]: any } = {
    Brain, Database, MessageSquare, BarChart3, FileText, Zap, Globe, Shield,
    Cpu, Camera, TrendingUp, Bot, Search, Cloud, Code, Settings, Layers,
    Target, Sparkles, Rocket
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error",
        description: "Failed to fetch services",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      tech: "",
      icon: "Brain",
      image: "",
      featured: false,
    });
    setEditingService(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const techArray = formData.tech.split(",").map(tech => tech.trim()).filter(tech => tech.length > 0);
      
      const serviceData = {
        title: formData.title,
        description: formData.description,
        tech: techArray,
        icon: formData.icon,
        image: formData.image || null,
        featured: formData.featured,
      };

      // Validate data
      serviceSchema.parse(serviceData);

      if (editingService) {
        const { error } = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', editingService.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Service updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('services')
          .insert([serviceData]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Service created successfully",
        });
      }

      resetForm();
      setDialogOpen(false);
      fetchServices();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Error saving service:', error);
        toast({
          title: "Error",
          description: "Failed to save service",
          variant: "destructive",
        });
      }
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      tech: service.tech.join(", "),
      icon: service.icon,
      image: service.image || "",
      featured: service.featured,
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Service deleted successfully",
      });
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      toast({
        title: "Error",
        description: "Failed to delete service",
        variant: "destructive",
      });
    }
  };

  const toggleFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ featured: !currentFeatured })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Service ${!currentFeatured ? 'featured' : 'unfeatured'} successfully`,
      });
      fetchServices();
    } catch (error) {
      console.error('Error updating featured status:', error);
      toast({
        title: "Error",
        description: "Failed to update featured status",
        variant: "destructive",
      });
    }
  };

  const featuredServices = services.filter(service => service.featured);
  const displayServices = showAll ? services : featuredServices;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4">AI & ML Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive artificial intelligence and machine learning solutions 
              to transform your business and drive innovation.
            </p>
          </div>
          {isAdmin && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Service
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingService ? "Edit Service" : "Add New Service"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="tech">Technologies (comma-separated)</Label>
                    <Input
                      id="tech"
                      value={formData.tech}
                      onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                      placeholder="React, Node.js, Python"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="icon">Icon</Label>
                    <select
                      id="icon"
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      {Object.keys(iconMap).map((iconName) => (
                        <option key={iconName} value={iconName}>
                          {iconName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="image">Image URL (optional)</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                    />
                    <Label htmlFor="featured">Featured Service</Label>
                  </div>
                  <Button type="submit" className="w-full">
                    {editingService ? "Update Service" : "Create Service"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Brain;
            return (
              <Card key={service.id} className="group relative hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      {service.featured && (
                        <Badge variant="default" className="bg-yellow-500 text-yellow-900">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      {isAdmin && (
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleFeatured(service.id, service.featured)}
                            title={service.featured ? "Remove from featured" : "Add to featured"}
                          >
                            <Star className={`h-4 w-4 ${service.featured ? 'fill-current' : ''}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleEdit(service)}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => handleDelete(service.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tech.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                    <Link to="/contact">
                      Contact Me
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No services yet</h3>
            <p className="text-muted-foreground mb-4">
              {isAdmin ? "Start adding services to showcase your offerings." : "Check back soon for available services."}
            </p>
          </div>
        ) : (
          <>
            {!showAll && services.length > featuredServices.length && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setShowAll(true)}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View All Services ({services.length} total)
                </Button>
              </div>
            )}

            {showAll && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setShowAll(false)}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Show Featured Only ({featuredServices.length} services)
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
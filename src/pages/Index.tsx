import { 
  ArrowRight, Code, Zap, Users, Download, ExternalLink, Github, Linkedin, 
  Phone, Mail, Calendar, MapPin, Award, Brain, Rocket, Hash, Code2
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile-image.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ featured: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast({ title: "Project updated successfully" });
      fetchProjects();
    } catch (error) {
      console.error('Error:', error);
      toast({ title: "Failed to update project", variant: "destructive" });
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({ title: "Project deleted successfully" });
      fetchProjects();
    } catch (error) {
      console.error('Error:', error);
      toast({ title: "Failed to delete project", variant: "destructive" });
    }
  };

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "15+", label: "AI Models Deployed" },
    { value: "1M+", label: "Users Impacted" },
  ];

  const education = [
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "Stanford University",
      period: "2017 - 2019",
      details: "Specialized in Deep Learning and Computer Vision. Thesis on 'Novel Architectures for Real-time Object Detection'"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "MIT",
      period: "2013 - 2017",
      details: "Magna Cum Laude. Focus on Algorithms, Data Structures, and Software Engineering"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 119, 255, 0.9) 0%, rgba(16, 185, 129, 0.85) 100%), url(${profileImage})`,
            backgroundBlendMode: 'overlay'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8 animate-fade-in-down">
            <img 
              src={profileImage}
              alt="Umar Majeed"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
            />
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Umar Majeed
          </h1>
          
          <p className="text-xl sm:text-3xl text-white/90 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            AI Engineer & Machine Learning Expert
          </p>
          
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Building intelligent systems that transform data into actionable insights
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <a href="https://drive.google.com/file/d/12pxfackoXzMRzjIj-R1trzHGEjbYZgDA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            
            <Button asChild variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="sm" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
              <a href="https://github.com/umarmajeedofficial" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
              <a href="https://linkedin.com/in/umarmajeedofficial" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
              <a href="https://hashnode.com/@umarmajeed" target="_blank" rel="noopener noreferrer">
                <Hash className="h-4 w-4 mr-2" />
                Blog
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
              <a href="https://wa.me/+923075588988" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
              <a href="https://leetcode.com/umarmajeedofficial" target="_blank" rel="noopener noreferrer">
                <Code2 className="h-4 w-4 mr-2" />
                LeetCode
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
              <a href="https://codeforces.com/profile/umarmajeed" target="_blank" rel="noopener noreferrer">
                <Code className="h-4 w-4 mr-2" />
                Codeforces
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              I'm a passionate AI engineer and researcher with a deep love for solving complex problems 
              through innovative technology. My journey spans from theoretical research to production 
              systems that impact millions of users.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-premium">
              <CardContent className="p-6">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">AI & ML</h3>
                <p className="text-muted-foreground mb-4">TensorFlow, PyTorch, Scikit-learn, OpenAI GPT</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-6">
                <Code className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Programming</h3>
                <p className="text-muted-foreground mb-4">Python, JavaScript, TypeScript, Go, C++</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-6">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground mb-4">React, Next.js, Node.js, FastAPI</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-12 justify-center animate-slide-in-left">
            <Brain className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="card-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-2">{edu.school}</p>
                      <p className="text-muted-foreground">{edu.details}</p>
                    </div>
                    <div className="lg:text-right lg:ml-6 mt-2 lg:mt-0">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my latest work demonstrating expertise in AI, machine learning, 
              and full-stack development.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <Card 
                  key={project.id}
                  className="card-premium group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                        {project.title}
                      </h3>
                      {isAdmin && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant={project.featured ? "default" : "outline"}
                            onClick={() => toggleFeatured(project.id, project.featured)}
                          >
                            ⭐
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteProject(project.id)}
                          >
                            🗑️
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech: string, i: number) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex space-x-3">
                      {project.demo_url && (
                        <Button asChild size="sm" className="flex-1">
                          <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </a>
                        </Button>
                      )}
                      {project.github_url && (
                        <Button asChild size="sm" variant="outline" className="flex-1">
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Let's <span className="text-gradient-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always excited to discuss new opportunities and innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-premium text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <a href="mailto:umarmajeedofficial@gmail.com" className="text-muted-foreground hover:text-primary">
                  umarmajeedofficial@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <a href="https://wa.me/+923075588988" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  +92 307 5588988
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/umarmajeedofficial" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

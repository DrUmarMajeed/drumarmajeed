import { useState, useEffect } from "react";
import { Plus, Edit3, Trash2, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "The Future of Machine Learning in 2025",
      excerpt: "Exploring the latest trends and innovations that will shape the ML landscape in the coming year.",
      content: "Machine learning continues to evolve at a rapid pace, with new breakthroughs emerging regularly. In this comprehensive analysis, we explore the key trends that will define the ML landscape in 2025...",
      author: "Umar Majeed",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["Machine Learning", "AI", "Future Tech"],
      category: "Technology"
    },
    {
      id: 2,
      title: "Building Scalable AI Applications with Python",
      excerpt: "A comprehensive guide to developing production-ready AI applications that can handle millions of users.",
      content: "Creating scalable AI applications requires careful consideration of architecture, performance optimization, and deployment strategies. This guide walks through the essential components...",
      author: "Umar Majeed",
      date: "2024-12-10",
      readTime: "12 min read",
      tags: ["Python", "AI", "Scalability", "Development"],
      category: "Tutorial"
    },
    {
      id: 3,
      title: "Deep Learning: From Theory to Production",
      excerpt: "Understanding the journey from research concepts to real-world deep learning implementations.",
      content: "The gap between deep learning research and production deployment can be significant. This article bridges that gap by providing practical insights...",
      author: "Umar Majeed",
      date: "2024-12-05",
      readTime: "15 min read",
      tags: ["Deep Learning", "Production", "MLOps"],
      category: "Research"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    category: ""
  });

  const { toast } = useToast();

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      tags: "",
      category: ""
    });
    setEditingArticle(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const articleData = {
      ...formData,
      author: "Umar Majeed",
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(formData.content.length / 200)} min read`,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    };

    if (editingArticle) {
      // Update existing article
      setArticles(prev => prev.map(article => 
        article.id === editingArticle.id 
          ? { ...articleData, id: editingArticle.id }
          : article
      ));
      toast({
        title: "Success",
        description: "Article updated successfully!",
      });
    } else {
      // Add new article
      const newArticle = {
        ...articleData,
        id: Date.now()
      };
      setArticles(prev => [newArticle, ...prev]);
      toast({
        title: "Success",
        description: "Article created successfully!",
      });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      tags: article.tags.join(', '),
      category: article.category
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setArticles(prev => prev.filter(article => article.id !== id));
    toast({
      title: "Success",
      description: "Article deleted successfully!",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-secondary-soft/20 to-primary-soft/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary-soft border border-secondary/20 backdrop-blur-sm">
              <Edit3 className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">AI/ML Insights & Tutorials</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Latest </span>
              <span className="block text-gradient-hero">Articles</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Dive deep into the world of artificial intelligence and machine learning with comprehensive tutorials, 
              research insights, and practical guides from the cutting edge of technology.
            </p>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="btn-hero" onClick={() => { resetForm(); setIsDialogOpen(true); }}>
                  <Plus className="mr-2 h-4 w-4" />
                  Write New Article
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingArticle ? "Edit Article" : "Create New Article"}</DialogTitle>
                  <DialogDescription>
                    {editingArticle ? "Update your article content" : "Share your knowledge with the world"}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter article title"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Brief description of the article"
                      rows={2}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Write your article content here..."
                      rows={8}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="e.g., Technology, Tutorial, Research"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                      placeholder="e.g., Machine Learning, Python, AI"
                    />
                  </div>
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="btn-hero">
                      {editingArticle ? "Update Article" : "Publish Article"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">No articles yet</h3>
              <p className="text-muted-foreground mb-8">Start sharing your knowledge by creating your first article.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(article)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(article.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Articles;
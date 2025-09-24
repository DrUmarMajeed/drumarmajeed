import { ExternalLink, Github, Star, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const featuredProjects = [
    {
      title: "AI-Powered Code Assistant",
      description: "A VSCode extension that uses GPT-4 to provide intelligent code suggestions, bug fixes, and documentation generation. Trained on millions of code repositories.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TypeScript", "OpenAI GPT-4", "VSCode API", "Docker"],
      github: "https://github.com/umarmajeed/ai-code-assistant",
      demo: "https://marketplace.visualstudio.com/items?itemName=umarmajeed.ai-assistant",
      featured: true,
      stats: { stars: 2400, downloads: "50K+" },
      date: "2024"
    },
    {
      title: "Real-time Fraud Detection System",
      description: "Machine learning system that detects fraudulent transactions in real-time with 99.8% accuracy. Processes over 100K transactions per second.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "AWS"],
      github: "https://github.com/umarmajeed/fraud-detection",
      demo: "https://fraud-detection-demo.example.com",
      featured: true,
      stats: { stars: 1800, accuracy: "99.8%" },
      date: "2023"
    },
    {
      title: "Autonomous Navigation System",
      description: "Computer vision and deep learning system for autonomous vehicle navigation. Includes object detection, path planning, and real-time decision making.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "PyTorch", "OpenCV", "ROS", "CUDA", "C++"],
      github: "https://github.com/umarmajeed/autonomous-nav",
      demo: "https://autonomous-nav-demo.example.com",
      featured: true,
      stats: { stars: 3200, miles: "10K+ tested" },
      date: "2023"
    }
  ];

  const otherProjects = [
    {
      title: "Smart Home IoT Platform",
      description: "Full-stack platform for managing IoT devices with AI-powered automation and energy optimization.",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Docker"],
      github: "https://github.com/umarmajeed/smart-home",
      demo: "https://smarthome-demo.example.com",
      date: "2024"
    },
    {
      title: "NLP Document Analyzer",
      description: "Advanced document processing system using transformer models for content analysis and summarization.",
      technologies: ["Python", "Transformers", "FastAPI", "PostgreSQL"],
      github: "https://github.com/umarmajeed/doc-analyzer",
      demo: "https://doc-analyzer-demo.example.com",
      date: "2023"
    },
    {
      title: "Cryptocurrency Trading Bot",
      description: "Algorithmic trading bot using deep reinforcement learning for cryptocurrency markets.",
      technologies: ["Python", "TensorFlow", "WebSocket", "Redis", "AWS"],
      github: "https://github.com/umarmajeed/crypto-bot",
      demo: null,
      date: "2022"
    },
    {
      title: "Medical Image Classification",
      description: "CNN-based system for medical image analysis and disease detection with clinical accuracy.",
      technologies: ["Python", "PyTorch", "DICOM", "Flask", "Docker"],
      github: "https://github.com/umarmajeed/medical-ai",
      demo: "https://medical-ai-demo.example.com",
      date: "2022"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            My <span className="text-gradient-primary">Projects</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            A collection of projects showcasing my expertise in AI, machine learning, and software engineering. 
            From cutting-edge research to production-ready applications.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-slide-in-left">
            Featured Projects
          </h2>
          
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="card-premium overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Project Details */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{project.date}</span>
                              </div>
                              {project.stats.stars && (
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4" />
                                  <span>{project.stats.stars}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            Featured
                          </Badge>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="mb-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <Tag className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Technologies</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="btn-hero flex-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button variant="outline" className="btn-glass flex-1" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-slide-in-left">
            Other Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="card-premium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20 p-12 rounded-2xl bg-gradient-hero">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Interested in Collaborating?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on innovative projects and challenging problems. 
              Let's discuss how we can build something amazing together.
            </p>
            <Button className="btn-glass text-white border-white/30 hover:bg-white/20" asChild>
              <a href="/contact">
                <span>Get In Touch</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;

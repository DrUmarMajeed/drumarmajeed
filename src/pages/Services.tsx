import { useState } from "react";
import { ArrowRight, Brain, Code2, Database, Zap, Globe, Shield, Cpu, Cloud, Search, Bot, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const allServices = [
    {
      id: 1,
      title: "Machine Learning Model Development",
      description: "Custom ML models tailored to your business needs using TensorFlow, PyTorch, and scikit-learn.",
      tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      icon: Brain,
      featured: true,
      image: "🤖"
    },
    {
      id: 2,
      title: "AI-Powered Web Applications",
      description: "Full-stack applications with integrated AI capabilities for enhanced user experiences.",
      tech: ["React", "Node.js", "Python", "FastAPI"],
      icon: Globe,
      featured: true,
      image: "🌐"
    },
    {
      id: 3,
      title: "Computer Vision Solutions",
      description: "Advanced image recognition, object detection, and visual analysis systems.",
      tech: ["OpenCV", "YOLO", "PyTorch", "TensorFlow"],
      icon: Search,
      featured: true,
      image: "👁️"
    },
    {
      id: 4,
      title: "Natural Language Processing",
      description: "NLP solutions for text analysis, sentiment detection, and language understanding.",
      tech: ["NLTK", "spaCy", "Transformers", "BERT"],
      icon: Bot,
      featured: true,
      image: "🗣️"
    },
    {
      id: 5,
      title: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights with interactive dashboards.",
      tech: ["Pandas", "NumPy", "Plotly", "D3.js"],
      icon: Database,
      featured: false,
      image: "📊"
    },
    {
      id: 6,
      title: "API Development & Integration",
      description: "RESTful APIs and microservices for scalable backend solutions.",
      tech: ["FastAPI", "Django", "Flask", "PostgreSQL"],
      icon: Zap,
      featured: false,
      image: "⚡"
    },
    {
      id: 7,
      title: "Cloud Deployment & DevOps",
      description: "Deploy and manage ML models in production environments.",
      tech: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      icon: Cloud,
      featured: false,
      image: "☁️"
    },
    {
      id: 8,
      title: "AI Consulting & Strategy",
      description: "Strategic guidance on AI implementation and digital transformation.",
      tech: ["Business Analysis", "AI Strategy", "ROI Planning"],
      icon: Rocket,
      featured: false,
      image: "🚀"
    },
    {
      id: 9,
      title: "Deep Learning Research",
      description: "Advanced neural networks and experimental AI research projects.",
      tech: ["PyTorch", "JAX", "Research Papers", "Innovation"],
      icon: Cpu,
      featured: false,
      image: "🧠"
    },
    {
      id: 10,
      title: "Cybersecurity AI Solutions",
      description: "AI-powered security systems for threat detection and prevention.",
      tech: ["ML Security", "Anomaly Detection", "Python"],
      icon: Shield,
      featured: false,
      image: "🛡️"
    },
    {
      id: 11,
      title: "Recommendation Systems",
      description: "Personalized recommendation engines for e-commerce and content platforms.",
      tech: ["Collaborative Filtering", "Content-Based", "Hybrid"],
      icon: Brain,
      featured: false,
      image: "🎯"
    },
    {
      id: 12,
      title: "Time Series Analysis",
      description: "Forecasting and trend analysis for business intelligence.",
      tech: ["ARIMA", "LSTM", "Prophet", "Pandas"],
      icon: Database,
      featured: false,
      image: "📈"
    },
    {
      id: 13,
      title: "Chatbot Development",
      description: "Intelligent conversational agents with natural language understanding.",
      tech: ["Dialogflow", "Rasa", "OpenAI", "LangChain"],
      icon: Bot,
      featured: false,
      image: "💬"
    },
    {
      id: 14,
      title: "Image Processing & Enhancement",
      description: "Advanced image manipulation and enhancement using AI techniques.",
      tech: ["OpenCV", "PIL", "Scikit-image", "GANs"],
      icon: Search,
      featured: false,
      image: "🖼️"
    },
    {
      id: 15,
      title: "Automated Testing Solutions",
      description: "AI-driven testing frameworks for software quality assurance.",
      tech: ["Selenium", "Pytest", "ML Testing", "Automation"],
      icon: Zap,
      featured: false,
      image: "🧪"
    },
    {
      id: 16,
      title: "Edge AI Solutions",
      description: "Deploy AI models on edge devices for real-time processing.",
      tech: ["TensorFlow Lite", "ONNX", "Edge Computing"],
      icon: Cpu,
      featured: false,
      image: "📱"
    },
    {
      id: 17,
      title: "Blockchain Integration",
      description: "Combine AI with blockchain for decentralized intelligent systems.",
      tech: ["Solidity", "Web3", "Smart Contracts", "DeFi"],
      icon: Shield,
      featured: false,
      image: "⛓️"
    },
    {
      id: 18,
      title: "IoT Analytics",
      description: "AI-powered analytics for Internet of Things devices and sensors.",
      tech: ["IoT", "Edge Analytics", "Real-time Processing"],
      icon: Globe,
      featured: false,
      image: "🌐"
    },
    {
      id: 19,
      title: "Performance Optimization",
      description: "Optimize ML models and applications for maximum efficiency.",
      tech: ["Model Compression", "Quantization", "Optimization"],
      icon: Rocket,
      featured: false,
      image: "⚡"
    },
    {
      id: 20,
      title: "AI Training & Workshops",
      description: "Educational sessions and workshops on AI/ML technologies.",
      tech: ["Training", "Workshops", "Mentoring", "Education"],
      icon: Brain,
      featured: false,
      image: "🎓"
    }
  ];

  const featuredServices = allServices.filter(service => service.featured);
  const displayServices = showAll ? allServices : featuredServices;

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-primary-soft/20 to-secondary-soft/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-soft border border-primary/20 backdrop-blur-sm">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional AI/ML Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              <span className="block text-foreground">AI & ML </span>
              <span className="block text-gradient-hero">Services</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
              From custom model development to full-stack AI applications, I deliver innovative technology solutions 
              that drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {showAll ? "All Services" : "Featured Services"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {showAll 
                ? "Complete range of AI/ML services to meet all your technology needs"
                : "Highlighting the most popular and impactful AI/ML solutions"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayServices.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full btn-hero text-sm" 
                    asChild
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Contact Me
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="btn-glass"
            >
              {showAll ? "Show Featured Only" : "See All Services"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
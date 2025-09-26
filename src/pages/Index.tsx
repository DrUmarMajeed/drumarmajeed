import { ArrowRight, Download, Sparkles, Zap, Brain, Code2, GraduationCap, Trophy, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-emerald-100/40 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 animate-fade-in-up">
            {/* Profile Image - Mobile Only */}
            <div className="flex justify-center mb-8 lg:hidden">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Umar Majeed - AI/ML Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Greeting */}
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200/50 backdrop-blur-sm shadow-sm">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
              </div>
            </div>

            {/* Main Content - Desktop Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 text-center lg:text-left">
              {/* Profile Image - Desktop Only */}
              <div className="hidden lg:block">
                <div className="relative w-96 h-96 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary-glow rounded-full animate-glow"></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl backdrop-blur-sm">
                    <img 
                      src={profileImage} 
                      alt="Umar Majeed - AI/ML Engineer" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 lg:max-w-2xl">
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Hi, I'm </span>
                  <span className="block text-gradient-hero">Umar Majeed 👋</span>
                </h1>

                {/* Subtitle */}
                <div className="space-y-4 mt-6">
                  <p className="text-xl sm:text-2xl font-medium">
                    <span className="text-gradient-primary font-semibold">AI/ML Engineer • Aspiring PhD Scholar • AI/ML Researcher</span>
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Transforming complex problems into elegant solutions with cutting-edge AI and machine learning. 
                    Building intelligent systems that shape the future, one neural network at a time.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 pt-8">
                  <Link to="/projects" className="btn-hero group">
                    <span>View My Work</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <Button variant="outline" className="relative bg-background/80 border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group" asChild>
                      <a href="/resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download CV</span>
                      </a>
                    </Button>
                  </div>

                  <Button variant="outline" className="bg-background/80 border-secondary/20 text-foreground hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300" asChild>
                    <a href="https://leetcode.com/umarmajeedofficial" target="_blank" rel="noopener noreferrer">
                      <Code2 className="mr-2 h-4 w-4" />
                      <span>Visit My LeetCode</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 pt-16 max-w-4xl mx-auto text-center">
              {[{
                icon: Brain,
                label: "AI Models",
                value: "15+"
              }, {
                icon: Zap,
                label: "Projects",
                value: "50+"
              }, {
                icon: Sparkles,
                label: "Experience",
                value: "5+ Years"
              }, {
                icon: Code2,
                label: "LeetCode",
                value: "700+"
              }, {
                icon: GraduationCap,
                label: "Teaching Hours",
                value: "200+"
              }, {
                icon: Trophy,
                label: "Hackathons",
                value: "20+"
              }].map((stat, index) => (
                <div key={stat.label} className="text-center space-y-2 animate-scale-in" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 border border-gray-200/50 shadow-sm">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Passionate About <span className="text-gradient-primary">Innovation</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              With expertise spanning artificial intelligence, machine learning, and full-stack development, 
              I create intelligent solutions that push the boundaries of what's possible. From neural networks 
              to scalable web applications, I bring ideas to life with precision and creativity.
            </p>
            <Link to="/about" className="btn-secondary-hero inline-flex items-center group">
              <span>Learn More About Me</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Recent <span className="text-gradient-primary">Work</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore some of my latest projects showcasing AI/ML innovation and software engineering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Recommendation System",
                description: "Built a machine learning recommendation engine using collaborative filtering and neural networks, achieving 95% accuracy in user preference prediction.",
                tech: ["Python", "TensorFlow", "React", "FastAPI"],
                link: "#",
                github: "#"
              },
              {
                title: "Real-time Chat Application",
                description: "Developed a scalable real-time messaging platform with WebSocket integration, supporting 10K+ concurrent users.",
                tech: ["Node.js", "Socket.io", "React", "MongoDB"],
                link: "#",
                github: "#"
              },
              {
                title: "Computer Vision Analytics",
                description: "Created an advanced image recognition system for automated quality control in manufacturing processes.",
                tech: ["OpenCV", "PyTorch", "Docker", "AWS"],
                link: "#",
                github: "#"
              }
            ].map((project, index) => (
              <Card key={project.title} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-secondary-hero inline-flex items-center group">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
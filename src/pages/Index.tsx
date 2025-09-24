import { ArrowRight, Download, Sparkles, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const Index = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-emerald-100/40 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Greeting */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200/50 backdrop-blur-sm shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-800">Hi, I'm </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Umar Majeed 👋</span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                <span className="text-blue-600 font-semibold">AI/ML Engineer</span> • 
                <span className="text-emerald-600 font-semibold"> Aspiring PhD Scholar</span> • 
                <span className="text-gray-800 font-semibold"> AI/ML Researcher</span>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transforming complex problems into elegant solutions with cutting-edge AI and software engineering. 
                Building the future, one algorithm at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link to="/projects" className="btn-hero group">
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Button variant="outline" className="bg-white/80 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 transition-all duration-200 group" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
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
            }].map((stat, index) => <div key={stat.label} className="text-center space-y-2 animate-scale-in" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 border border-gray-200/50 shadow-sm">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
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
    </div>;
};
export default Index;
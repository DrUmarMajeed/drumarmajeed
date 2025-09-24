import { Calendar, MapPin, Award, Code, Brain, Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of next-generation AI models and implementing MLOps pipelines for production systems.",
      achievements: [
        "Increased model accuracy by 35% through novel architecture design",
        "Reduced inference time by 60% with optimization techniques",
        "Led team of 8 engineers in developing autonomous systems"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataFlow Solutions",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed and deployed ML models for real-time data processing and predictive analytics.",
      achievements: [
        "Built recommendation system serving 1M+ users",
        "Implemented real-time fraud detection with 99.8% accuracy",
        "Optimized data pipelines reducing processing time by 70%"
      ]
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Full-stack development of web applications using modern technologies and agile methodologies.",
      achievements: [
        "Architected microservices handling 100K+ daily requests",
        "Improved application performance by 45%",
        "Mentored junior developers and established coding standards"
      ]
    }
  ];

  const skills = [
    { category: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Computer Vision", "NLP"], level: 95 },
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "Go", "Rust", "C++"], level: 90 },
    { category: "Web Development", items: ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "MongoDB"], level: 88 },
    { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"], level: 85 },
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
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            About <span className="text-gradient-primary">Me</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            I'm a passionate AI engineer and researcher with a deep love for solving complex problems 
            through innovative technology. My journey spans from theoretical research to production 
            systems that impact millions of users.
          </p>
          <Button className="btn-hero" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Full CV
            </a>
          </Button>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8 animate-slide-in-left">
            <Rocket className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="card-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                    </div>
                    <div className="lg:text-right lg:ml-6">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-secondary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8 animate-slide-in-left">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Skills & Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card 
                key={index}
                className="card-premium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                  
                  {/* Skill Level Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-medium">{skillGroup.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skillGroup.level}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center space-x-3 mb-8 animate-slide-in-left">
            <Brain className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>
          
          <div className="space-y-6">
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
        </section>
      </div>
    </div>
  );
};

export default About;
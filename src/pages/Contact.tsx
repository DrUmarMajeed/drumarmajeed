import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { z } from 'zod';

// Initialize EmailJS
emailjs.init("Du86APy14CLJArSxY");

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umarmajeedofficial@gmail.com",
      href: "mailto:umarmajeedofficial@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+923075588988",
      href: "tel:+923075588988"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/umarmajeedofficial",
      icon: Github,
      username: "@umarmajeedofficial"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/umarmajeedofficial",
      icon: Linkedin,
      username: "Umar Majeed"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/DrUmarMajeed",
      icon: Twitter,
      username: "@DrUmarMajeed"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      setIsSubmitting(true);

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_7odjqks', // Service ID
        'template_049iju3', // Template ID
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
          to_name: 'Umar', // Replace with your name
        }
      );

      console.log('Email sent successfully:', result.status, result.text);
      
      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        // Handle EmailJS errors
        toast({
          title: "Failed to send message",
          description: "Something went wrong. Please try again or contact me directly via email.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let's <span className="text-gradient-primary">Connect</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
            Whether you have a question, an idea, or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium animate-slide-in-left">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me more about your project or question..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-hero w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="card-premium animate-slide-in-right">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-premium animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-all duration-200 hover:scale-105 group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                          <IconComponent className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{social.name}</p>
                          <p className="text-xs text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="card-premium animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via LinkedIn or email directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
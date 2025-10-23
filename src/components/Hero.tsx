import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Tollan Berhanu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Machine Learning Engineer and graduate researcher building agentic AI tooling,
            knowledge graph systems, and secure intent-based networking experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-hero" asChild>
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button variant="outline" className="btn-hero-outline" asChild>
              <a href="/Tollan_Berhanu_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/tollanberhanu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tollanberhanu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:tollanberhanu@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-muted-foreground" size={24} />
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
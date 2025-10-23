import { Code, Coffee, Zap } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
        setScrollY(scrollProgress * 50);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Agentic AI Systems",
      description: "Designing MCP-driven agents that translate natural-language intent into network simulations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Knowledge Graphs",
      description: "Building long-term memory for LLMs with Neo4j and custom schema generation"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Secure ML Ops",
      description: "Improving the resilience, privacy, and deployment of distributed deep learning workloads"
    }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted/30" ref={sectionRef}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Machine Learning Engineer blending academic research with production ML systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Parallax */}
          <div 
            className={`flex justify-center lg:justify-start transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <div 
                className="w-80 h-80 rounded-2xl overflow-hidden shadow-elegant"
                style={{ transform: `translateY(${scrollY}px)` }}
              >
                <img 
                  src={profileImg} 
                  alt="Tollan Berhanu" 
                  className="w-full h-full object-cover scale-110"
                  style={{ transform: `translateY(-${scrollY * 0.5}px)` }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am Tollan Berhanu, a graduate research assistant at the University of Idaho
                and former Machine Learning Engineer at SingularityNET. My work centers on
                agentic AI, retrieval-augmented generation, and secure ML deployments for
                large-scale networking environments.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Recent projects include translating natural-language prompts into GNS3 and
                ContainerLab simulations, integrating Llama 2 with long-term knowledge graph
                memory, and automating ML workflows for researchers who want results without
                writing boilerplate code.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="card-glass text-center">
                  <div className="text-primary mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100+</div>
                <div className="text-sm text-muted-foreground">Research Papers Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">60%</div>
                <div className="text-sm text-muted-foreground">Engagement Lift from LLM Chatbot</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">10k+</div>
                <div className="text-sm text-muted-foreground">Monthly Semantic Search Queries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
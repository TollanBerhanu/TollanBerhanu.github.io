import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI for Intent-Based Networking",
      description: "MSc thesis project that converts natural-language prompts into full GNS3 and ContainerLab simulations using custom MCP servers for SDN components, firewalls, and IDS nodes.",
      image: "https://images.unsplash.com/photo-1581091870622-3b5de0d00123?w=600&h=400&fit=crop",
      tags: ["Model Context Protocol", "GNS3", "ContainerLab", "Docker"],
      github: null,
      live: null
    },
    {
      title: "Automated Machine Learning for Data Science",
      description: "NSF-funded web platform that lets researchers automate data exploration, preprocessing, and neural network training workflows without writing code.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
      tags: ["React", "FastAPI", "TensorFlow", "MySQL"],
      github: null,
      live: null
    },
    {
      title: "Knowledge Graph Memory Chatbot",
      description: "Led a team of five to integrate Llama 2 with a Neo4j knowledge graph for persistent long-term memory, increasing user engagement by 60% on the SingularityNET platform.",
      image: "https://images.unsplash.com/photo-1526378722484-b1b1f4c7c4c5?w=600&h=400&fit=crop",
      tags: ["Llama 2", "Neo4j", "LangChain", "TypeScript"],
      github: "https://singularitynet.io",
      live: null
    },
    {
      title: "Mattermost Semantic Search Plugin",
      description: "Open-source RAG pipeline that delivers contextual search across Mattermost conversations, serving 10k+ monthly queries with improved relevance precision.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&h=400&fit=crop",
      tags: ["Python", "ChromaDB", "FastAPI", "Docker"],
      github: null,
      live: null
    }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`card-glow group overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Reveal Animation */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${
                    isVisible ? 'animate-image-reveal' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons */}
                {(project.github || project.live) && (
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-hero-outline">
            Request Detailed Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
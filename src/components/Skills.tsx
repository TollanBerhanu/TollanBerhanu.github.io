import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      skills: [
        "Model Context Protocol (MCP)",
        "Agentic Workflows",
        "Parameter-Efficient Fine-Tuning (PEFT)",
        "Retrieval-Augmented Generation (RAG)"
      ]
    },
    {
      title: "Machine Learning Stack",
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Matplotlib"]
    },
    {
      title: "Data & Knowledge Graphs",
      skills: ["MySQL", "PostgreSQL", "Neo4j", "MongoDB", "ChromaDB"]
    },
    {
      title: "Languages & Platforms",
      skills: ["Python", "JavaScript", "Java", "Haskell", "Docker", "Git", "AWS", "Google Cloud Platform", "CI/CD Pipelines"]
    }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

  <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`card-glow p-8 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-default"
                    style={{ 
                      animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.8)'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
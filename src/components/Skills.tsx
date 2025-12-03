import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code, 
  Cpu, 
  Brain, 
  Network, 
  Globe, 
  Server, 
  Cloud, 
  Building,
  GitBranch 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "Scheme", "Assembly"],
      color: "tech-glow"
    },
    {
      title: "System Programming",
      icon: Cpu,
      skills: ["Linux", "Multithreading", "Embedded Systems", "Compilation Principles", "Performance Optimization"],
      color: "accent-purple"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        "Advanced university-level ML course",
        "Model Training", 
        "Deep Learning", 
        "Semantic Analysis", 
        "Classification"
      ],
      color: "primary"
    },
    {
      title: "Networking",
      icon: Network,
      skills: ["HTTP", "Sockets", "FTP", "TCP/UDP", "Client-Server Models", "IP"],
      color: "green-400"
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["HTML", "React", "Responsive Design", "UI/UX"],
      color: "blue-400"
    },
    {
      title: "Backend",
      icon: Server,
      skills: [".NET Core", "Node.js", "PostgreSQL", "REST APIs", "Database Design", "Microservices"],
      color: "orange-400"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Distributed Systems", "CI/CD"],
      color: "cyan-400"
    },
    {
      title: "Architecture",
      icon: Building,
      skills: ["OOP", "Functional Programming", "System Design", "Microservices", "Scalability"],
      color: "purple-400"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Collaboration", "Code Reviews", "Branching Strategies"],
      color: "red-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="text-tech-glow">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building scalable, efficient, and intelligent software systems
            </p>
          </motion.div>

          {/* Skill Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={category.title} variants={itemVariants}>
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300 group">
                    <div className="flex items-center mb-4">
                      <IconComponent className={`h-8 w-8 text-${category.color} mr-3 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-tech-glow transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: skillIndex * 0.05 + index * 0.1 
                          }}
                          className="inline-block bg-secondary/60 text-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-primary/20 hover:text-tech-glow transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      year: "2022-2025",
      title: "B.Sc. Computer Science",
      organization: "Ben-Gurion University",
      type: "education",
      icon: GraduationCap,
      description: "Comprehensive computer science education with focus on systems programming, algorithms, and software engineering.",
      highlights: [
        "GPA: 88.4",
        "Expected Graduation: 2025",
        "Specialization in Systems & ML",
        "Advanced coursework in distributed systems"
      ],
      color: "tech-glow"
    },
    {
      year: "2024-2025",
      title: "Academic Mentor",
      organization: "Ben-Gurion University",
      type: "experience",
      icon: Award,
      description: "Guided and mentored fellow students in computer science coursework and academic development.",
      highlights: [
        "Mentored 20+ students",
        "Improved student success rates",
        "Conducted tutoring sessions",
        "Developed learning materials"
      ],
      color: "accent-purple"
    },
    {
      year: "2025",
      title: "Place-IL Talent Pool – Development Track",
      organization: "Place-IL (National Tech Program)",
      type: "experience",
      icon: Award,
      description:
        "Selected for Israel’s national talent pool for software engineering candidates, providing structured pathways to top tech internships.",
      highlights: [
        "Accepted under the Development Track",
        "Highly selective national program",
        "Bridges candidates to industry internships",
        "Professional evaluations & technical screening"
      ],
      color: "yellow-400"
    },

    {
      year: "2025",
      title: "MST Java Microservices & DevOps Program",
      organization: "MST Training Center",
      type: "education",
      icon: GraduationCap,
      description:
        "Completing a 4.5-month intensive program focused on backend development, microservices, and DevOps tooling.",
      highlights: [
        "300+ hours of hands-on training",
        "Spring Boot & Java backend development",
        "Microservices architecture",
        "Docker, Kubernetes, SQL/MongoDB, Kafka",
      ],
      color: "blue-400"
    },
    
  
    {
      year: "Ongoing",
      title: "Personal Development",
      organization: "Continuous Learning",
      type: "personal",
      icon: Heart,
      description: "Committed to continuous growth through fitness, learning, and skill development.",
      highlights: [
        "Regular gym training",
        "Open source contributions",
        "Technical blog writing",
        "Industry networking"
      ],
      color: "red-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience & <span className="text-tech-glow">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of academic excellence, leadership, and continuous growth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-tech-glow via-accent-purple to-primary opacity-30" />
              
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="relative mb-12"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 bg-${item.color} rounded-full border-4 border-background shadow-glow z-10`} />
                    
                    {/* Content Card */}
                    <div className="ml-20">
                      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-500 group">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center">
                            <IconComponent className={`h-8 w-8 text-${item.color} mr-4 group-hover:scale-110 transition-transform duration-300`} />
                            <div>
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-tech-glow transition-colors duration-300">
                                {item.title}
                              </h3>
                              <p className="text-lg text-muted-foreground">
                                {item.organization}
                              </p>
                            </div>
                          </div>
                          <span className={`px-4 py-2 bg-${item.color}/20 text-${item.color} rounded-full text-sm font-medium border border-${item.color}/30`}>
                            {item.year}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                            Key Achievements
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {item.highlights.map((highlight, highlightIndex) => (
                              <motion.div
                                key={highlight}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: highlightIndex * 0.1 
                                }}
                                className="flex items-center text-muted-foreground"
                              >
                                <div className={`w-2 h-2 bg-${item.color} rounded-full mr-3 flex-shrink-0`} />
                                <span className="text-sm">{highlight}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
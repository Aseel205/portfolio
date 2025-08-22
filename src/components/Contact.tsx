import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Phone, Send, Youtube } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "aseelbiadse.jobs@gmail.com", 
      href: "mailto:aseelbiadse.jobs@gmail.com",
      color: "tech-glow"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "aseel-biadsy",
      href: "https://www.linkedin.com/in/aseel-biadsy-9b5792303/",
      color: "blue-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Aseel205",
      href: "https://github.com/Aseel205",
      color: "accent-purple"
    },
    {
      icon: Youtube, // import Youtube icon from lucide-react or another icon library
      title: "YouTube",
      value: "@aseelbiadse7710",
      href: "https://www.youtube.com/@aseelbiadse7710",
      color: "red-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Baqa al-Gharbiyye, Israel",
      href: "#",
      color: "green-400"
    }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <section className="py-20 bg-background border-t border-border/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="text-tech-glow">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities in software development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Methods */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <motion.div
                        key={method.title}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center p-4 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group"
                        >
                          <IconComponent className={`h-6 w-6 text-${method.color} mr-4 group-hover:scale-110 transition-transform duration-300`} />
                          <div>
                            <p className="font-medium text-foreground">{method.title}</p>
                            <p className="text-muted-foreground group-hover:text-tech-glow transition-colors duration-300">
                              {method.value}
                            </p>
                          </div>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Call-to-Action */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/20 shadow-intense">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm actively seeking opportunities in software development, 
                  system programming, and full-stack development. Let's discuss how 
                  I can contribute to your team's success.
                </p>
                
                <div className="space-y-4">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full text-lg"
                    asChild
                  >
                    <a href="mailto:aseelbiadse.jobs@gmail.com">
                      <Send className="mr-2 h-5 w-5" />
                      Send me a message
                    </a>
                  </Button>
                  
                  <Button
                    variant="hero-outline"
                    size="lg"
                    className="w-full text-lg"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/aseel-biadsy-9b5792303/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/20 shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  What I'm Looking For
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tech-glow rounded-full mr-3" />
                    software Engineering Roles 
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mr-3" />
                    System Programming Positions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Full-Stack Development Roles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Cloud & Embedded Opportunities
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-border/20"
          >
            <p className="text-muted-foreground">
              © 2025 Aseel Biadsy. Built with React, TypeScript, and ❤️
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              "Every challenge is an opportunity to optimize, innovate, and learn."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
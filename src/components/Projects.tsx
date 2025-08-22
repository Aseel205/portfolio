import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Server, Brain, Network, Monitor, Cloud } from 'lucide-react';

const Projects = () => {
  const  projects = [
    // --- Full Stack ---
    {
      title: "After-School Courses Calendar SaaS (commercial)",
      description: "Multi-tenant SaaS platform for managing educational courses with advanced scheduling, user management, and real-time updates. Built with modern architecture and cloud deployment.",
      techStack: [".NET Core 7", "React", "AWS", "Docker", "PostgreSQL", "Microservices"],
      icon: Server,
      features: ["Multi-tenant architecture", "Real-time notifications", "Advanced scheduling", "Cloud deployment"],
      color: "tech-glow",
      category: "Full Stack"
    },
    {
      title: "Notes App with User Verification (MERN stack)",
      description: "A full stack web application for managing personal notes, with user authentication and verification features. Built using React, Node.js, and a JSON-based backend.",
      techStack: ["React", "Express", "Axios", "MongoDB", "PostMan", "Node.js"],
      icon: ExternalLink,
      github: "https://github.com/Aseel205/Notes-Manager-Full-Stack-MERN-App-",
      features: ["Create, view, and paginate notes", "User registration and login", "Authentication and session handling", "Persistent storage using JSON server"],
      color: "pink-400",
      category: "Full Stack"
    },
  
    // --- Cloud & Distributed Programming ---
    {
      title: "Semantic Similarity System",
      description: "Distributed NLP system on AWS using MapReduce for large-scale Hebrew text analysis. Implements advanced semantic similarity algorithms with machine learning classification.",
      techStack: ["Java", "AWS EMR", "MapReduce", "Machine Learning", "NLP", "Distributed Systems" , "Hadoop"],
      icon: Brain,
      github: "https://github.com/Aseel205/Distributed-systems-programming/tree/main/Semantic%20Similarity%20-%20Classification%20by%20various",
      features: ["Google Syntactic N-Grams", "MapReduce processing", "ML classification", "Scalable architecture"],
      color: "accent-purple",
      category: "Cloud & Distributed Programming"
    },
    {
      title: "Hebrew Word-Prediction System Using MapReduce",
      description: "Builds a knowledge base for Hebrew word-prediction using Google 3-Gram Hebrew dataset. Implements MapReduce on AWS EMR to compute conditional probabilities for trigrams and remove stop words.",
      techStack: ["Java", "AWS EMR", "MapReduce", "Distributed Systems", "Data Processing" ,  "Hadoop"],
      icon: Brain,
      github: "https://github.com/Aseel205/Distributed-systems-programming/tree/main/Knowledge-base%20for%20Word%20Prediction",
      features: ["Conditional probability calculation for word trigrams", "Stop word removal", "Large-scale data processing", "Scalable MapReduce implementation"],
      color: "violet-400",
      category: "Cloud & Distributed Programming"
    },
    {
      title: "Cloud File Processor",
      description: "Distributed cloud-based system for processing PDF files using AWS services. Implements scalable architecture with SQS, EC2, and S3 for handling large document workflows.",
      techStack: ["AWS EC2", "AWS S3", "AWS SQS", "Distributed Systems", "Python", "Docker"],
      icon: Cloud,
      github: "https://github.com/Aseel205/Distributed-systems-programming/tree/main/PDF%20Document%20Conversion%20in%20the%20Cloud/implementation",
      features: ["Distributed processing", "Auto-scaling", "Queue management", "Cloud-native design"],
      color: "cyan-400",
      category: "Cloud & Distributed Programming"
    },
  
    // --- Graphics & Gaming / Computer Graphics ---
    {
      title: "Ray Tracing Engine",
      description: "Advanced 3D rendering engine built from scratch using C++ and OpenGL. Features realistic lighting, reflections, transparency, and anti-aliasing using mathematical optics principles.",
      techStack: ["C++", "OpenGL", "Computer Graphics", "3D Rendering", "Shader Programming"],
      icon: Monitor,
      github: "https://github.com/Aseel205/ComputerGraphics/tree/main/Ray%20Tracing%20Implementation",
      features: ["Realistic lighting", "Ray-traced reflections", "Anti-aliasing", "Shader effects"],
      color: "blue-400",
      category: "Graphics & Gaming / Computer Graphics"
    },
    {
      title: "Rubik's Cube Renderer (OpenGL)",
      description: "Rendered a dynamic Rubik's cube in 3D using OpenGL and C++. Implements perspective camera, textured cube meshes, rotation controls, and color picking for interactive manipulation.",
      techStack: ["C++", "OpenGL", "3D Rendering", "Graphics Programming", "Shaders"],
      icon: Monitor,
      github: "https://github.com/Aseel205/ComputerGraphics/tree/main/Rubik's%20Cube%20Renderer",
      features: ["Perspective camera view", "Textured cube mesh with transformations", "Keyboard and mouse rotation controls", "Interactive color picking and manipulation"],
      color: "orange-400",
      category: "Graphics & Gaming / Computer Graphics"
    },
    {
      title: "Image Filters and Processing",
      description: "Implemented various image filters and processing algorithms in C++ to transform images and generate multiple filtered versions. Applies classic computer vision techniques for enhancement, analysis, and stylization of images.",
      techStack: ["C++", "OpenCV", "Image Processing", "Computer Vision"],
      icon: Monitor,
      github: "https://github.com/Aseel205/ComputerGraphics/tree/main/Image%20Filters%20and%20Processing/computerGraphics-main",
      features: ["Grayscale conversion with full pixel intensity range (0–255)", "Canny edge detection with Gaussian filtering and gradient analysis", "Halftone pattern transformation for pixelated effects", "Floyd-Steinberg dithering for natural grayscale level reduction"],
      color: "red-400",
      category: "Graphics & Gaming / Computer Graphics"
    },
    {
      title: "Set Card Game (Multiple Players)",
      description: "Implemented a extended version of the Set Card Game in Java. with muliple Players emphsizing on threads programming.",
      techStack: ["Threads", "Game Logic", "UI Handling", "Event Processing" ,  ],
      icon: Brain,
      github: "https://github.com/Aseel205/Systems-programming/tree/main/Set%20Card%20Game",
      features: ["Cards with four features: color, number, shape, shading", "Valid set detection: each feature either all same or all different", "Interactive game logic and selection validation"],
      color: "yellow-400",
      category: "Graphics & Gaming / Computer Graphics"
    },
  
    // --- Systems & Networking ---
    {
      title: "TFTP Server & Client",
      description: "High-performance multi-threaded file transfer system implementing TFTP protocol with broadcast support and Thread-per-Client architecture for concurrent connections.",
      techStack: ["Java", "Networking", "Multithreading", "TCP/UDP", "Protocol Design" ,  "Reactor"],
      icon: Network,
      github: "https://github.com/Aseel205/Systems-programming/tree/main/TFTP%20Server%20client",
      features: ["Multithreaded design", "Broadcast support", "Protocol implementation", "Concurrent handling"],
      color: "green-400",
      category: "Systems & Networking"
    },
    {
      title: "Warehouse Management System (C++)",
      description: "Designed an object-oriented Food Warehouse Management System using C++. Simulates warehouse operations, manages volunteers, customers, and orders, focusing on efficient memory management and avoiding leaks.",
      techStack: ["C++", "OOP", "Memory Management", "Data Structures"],
      icon: Server,
      github: "https://github.com/Aseel205/Systems-programming/tree/main/WareHouse/Spl",
      features: ["Volunteer roles for managing orders and customer interaction", "Order processing and warehouse daily operations simulation", "Efficient memory handling following the Rule of 5"],
      color: "green-400",
      category: "Systems & Networking"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-tech-glow">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions spanning distributed systems, full-stack development, 
              and high-performance computing
            </p>
          </motion.div>
  
          {/* Grouped Projects */}
          {Array.from(new Set(projects.map(p => p.category))).map((category) => (
            <div key={category} className="mb-16">
              {/* Category Title */}
              <h3 className="text-3xl font-semibold text-foreground mb-8">{category}</h3>
  
  
              {/* Projects Grid */}
              <motion.div variants={containerVariants} className="grid lg:grid-cols-2 gap-8">
                {projects
                  .filter(p => p.category === category)
                  .map((project) => {
                    const IconComponent = project.icon;
                    return (
                      <motion.div key={project.title} variants={itemVariants}>
                        <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-intense transition-all duration-500 group">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center">
                              <IconComponent className={`h-10 w-10 text-${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`} />
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-tech-glow transition-colors duration-300">
                                {project.title}
                              </h3>
                            </div>
                          </div>
  
                          {/* Description */}
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {project.description}
                          </p>
  
                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                              Key Features
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {project.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                  className="flex items-center text-sm text-muted-foreground"
                                >
                                  <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full mr-2`} />
                                  {feature}
                                </motion.div>
                              ))}
                            </div>
                          </div>
  
                          {/* Tech Stack */}
                          <div className="mb-8">
                            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-secondary/60 text-foreground text-xs rounded-full border border-border/30 hover:bg-primary/20 hover:text-tech-glow transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
  
                          {/* Action Buttons */}
                          <div className="flex gap-4">
                            <Button variant="hero" size="sm" asChild className="flex-1">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                        
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </div>
          ))}
  
          {/* GitHub Call-to-Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="inline-block p-8 bg-card/30 backdrop-blur-sm border-border/20 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Check out my GitHub for additional projects in systems programming, 
                data structures, and computer graphics.
              </p>
              <Button variant="hero" size="lg" asChild className="text-lg px-8">
                <a href="https://github.com/Aseel205" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </a>
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}  

export default Projects;
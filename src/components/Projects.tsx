import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Server, Brain, Monitor, Cloud } from 'lucide-react';
import { Network as NetworkIcon } from "lucide-react";


const Projects = () => {
    const projects = [

       // --- Cloud & Distributed Programming ---
       {
        title: "Semantic Similarity System",
        description: "Distributed NLP system on AWS using MapReduce for large-scale Hebrew text analysis. Implements semantic similarity algorithms with machine learning classification.",
        techStack: ["Java", "AWS EMR", "MapReduce", "Machine Learning", "NLP", "Hadoop"],
        icon: Brain,
        github: "https://github.com/Aseel205/Distributed-systems-programming/tree/main/Semantic%20Similarity%20-%20Classification%20by%20various",
        features: ["Google Syntactic N-Grams", "MapReduce processing", "ML classification", "Scalable architecture"],
        color: "accent-purple",
        category: "Cloud & Distributed Programming"
      },
      {
        title: "Hebrew Word Prediction (MapReduce)",
        description: "Large-scale Hebrew trigram dataset processing for next-word prediction. Implements MapReduce jobs to compute conditional probabilities and remove stop words.",
        techStack: ["Java", "AWS EMR", "MapReduce", "Distributed Systems", "Hadoop"],
        icon: Brain,
        github: "https://github.com/Aseel205/Distributed-systems-programming/tree/main/Knowledge-base%20for%20Word%20Prediction",
        features: ["Conditional probability", "Large-scale trigram analysis", "Stop-word removal", "Distributed pipeline"],
        color: "violet-400",
        category: "Cloud & Distributed Programming"
      },
      {
        title: "Cloud File Processor",
        description: "Distributed system for processing PDF files on AWS using EC2 workers, SQS queues, and S3 storage.",
        techStack: ["AWS EC2", "AWS S3", "AWS SQS", "Distributed Systems", "Python", "Docker"],
        icon: Cloud,
        github: "https://github.com/Aseel205/Distributed-systems-programming/tree/main/PDF%20Document%20Conversion%20in%20the%20Cloud/implementation",
        features: ["Queue orchestration", "Parallel workers", "Auto-scaling", "Fault-tolerant design"],
        color: "cyan-400",
        category: "Cloud & Distributed Programming"
      },
        // --- Graphics & Gaming / Computer Graphics ---
      {
        title: "Ray Tracing Engine",
        description: "Advanced 3D rendering engine using C++ and OpenGL with real reflections, shadows, transparency, and anti-aliasing.",
        techStack: ["C++", "OpenGL", "3D Rendering", "Shader Programming"],
        icon: Monitor,
        github: "https://github.com/Aseel205/ComputerGraphics/tree/main/Ray%20Tracing%20Implementation",
        features: ["Realistic lighting", "Ray tracing", "Anti-aliasing", "Shader effects"],
        color: "blue-400",
        category: "Graphics & Computer Vision"
      },
      {
        title: "Rubik's Cube Renderer",
        description: "3D interactive Rubik’s Cube renderer using OpenGL with camera controls and real-time transformations.",
        techStack: ["C++", "OpenGL", "3D Rendering", "Graphics Programming"],
        icon: Monitor,
        github: "https://github.com/Aseel205/ComputerGraphics/tree/main/Rubik's%20Cube%20Renderer",
        features: ["Perspective camera", "Cube mesh rendering", "Rotation controls", "Color picking"],
        color: "orange-400",
        category: "Graphics & Computer Vision"
      },
      {
        title: "Image Filters & Computer Vision",
        description: "Implemented classical image processing techniques including grayscale, Canny edge detection, dithering, and halftoning.",
        techStack: ["C++", "OpenCV", "Image Processing"],
        icon: Monitor,
        github: "https://github.com/Aseel205/ComputerGraphics/tree/main/Image%20Filters%20and%20Processing/computerGraphics-main",
        features: ["Canny edges", "Halftone filter", "Floyd-Steinberg dithering", "Grayscale conversion"],
        color: "red-400",
        category: "Graphics & Computer Vision"
      },

      {
        title: "Action Segmentation from Videos",
        description:
          "Python project for video action segmentation and classification using deep learning. Includes complete pipelines for preprocessing, feature extraction, model training, and evaluation on workflow videos.",
        techStack: ["Python", "Image Processing", "Computer Vision", "Machine Learning"],
        icon: Brain,
        github: "https://github.com/Aseel205/Video-Action-Segmentation",
        features: [
          "Python-based video preprocessing & labeling",
          "Deep learning model training & evaluation",
          "Feature extraction and dataset preparation",
          "Accurate segmentation of workflow videos"
        ],
        color: "purple-400",
        category: "Graphics & Computer Vision"
      }, 
     
      // --- Full Stack ---
      {
        title: "After-School Courses Calendar SaaS (commercial)",
        description: "Multi-tenant SaaS platform for managing educational courses with advanced scheduling, user management, and real-time updates. Built with modern architecture and cloud deployment.",
        techStack: [".NET Core 7", "React", "AWS", "Docker", "PostgreSQL", "Microservices"],
        icon: Server,
        github: "https://github.com/Aseel205/After-School-SaaS",
        features: ["Multi-tenant architecture", "Real-time notifications", "Advanced scheduling", "Cloud deployment"],
        color: "tech-glow",
        category: "Full Stack"
      },
      {
        title: "Notes Manager (Full-Stack MERN App)",
        description: "Full stack web application for managing personal notes with authentication, pagination, and user-specific access control.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
        icon: ExternalLink,
        github: "https://github.com/Aseel205/Notes-Manager-Full-Stack-MERN-App-",
        features: ["User login & JWT auth", "Pagination", "Secure role-based access", "JSON-based storage"],
        color: "pink-400",
        category: "Full Stack"
      },
    
     
    
      // --- Systems & Networking ---
      {
        title: "xv6 Operating System Extensions (Unix - based)",
        description: "Kernel-level extensions in xv6 including system calls, shared memory regions, and virtual memory updates.",
        techStack: ["C", "Kernel Programming", "Operating Systems", "Memory Management"],
        icon: NetworkIcon,
        github: "https://github.com/Aseel205/operating-Systems",
        features: ["New syscalls", "Shared memory", "Page table modifications", "Kernel synchronization"],
        color: "blue-400",
        category: "Systems & Networking"
      },
      {
        title: "TFTP Server & Client",
        description: "Multithreaded TFTP file transfer system with TCP/UDP networking and custom protocol handling.",
        techStack: ["Java", "Networking", "TCP/UDP", "Multithreading"],
        icon: NetworkIcon,
        github: "https://github.com/Aseel205/Systems-programming/tree/main/TFTP%20Server%20client",
        features: ["Protocol implementation", "Broadcast support", "Thread-per-client", "Concurrent transfers"],
        color: "green-400",
        category: "Systems & Networking"
      },
        {
          title: "Set Card Game (Multithreaded Java)",
          description: "Multithreaded implementation of the Set game with event-based UI and game logic.",
          techStack: ["Java", "Threads", "Game Logic"],
          icon: Brain,
          github: "https://github.com/Aseel205/Systems-programming/tree/main/Set%20Card%20Game",
          features: ["Threading", "Event handling", "Real-time UI", "Set logic verification"],
          color: "yellow-400",
          category: "Systems & Networking"
        },


      {
        title: "Warehouse Management System",
        description: "OOP-based warehouse management simulation focusing on memory safety and the Rule of 5.",
        techStack: ["C++", "OOP", "Memory Management", "Data Structures"],
        icon: Server,
        github: "https://github.com/Aseel205/Systems-programming/tree/main/WareHouse/Spl",
        features: ["Order handling", "Volunteer operations", "Customer management", "Safe memory handling"],
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
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Server, Brain, Monitor, Cloud, Shield } from 'lucide-react';
import { Network as NetworkIcon } from "lucide-react";


const Projects = () => {
  const projects = [

    // ============================
    // CLOUD & DISTRIBUTED PROGRAMMING
    // ============================
    {
      title: "Semantic Similarity System (AWS MapReduce)",
      description:
        "Distributed NLP system on AWS EMR using MapReduce to process large Hebrew corpora and classify semantic similarity using machine learning.",
      techStack: ["Java", "AWS EMR", "Hadoop", "MapReduce", "Machine Learning", "NLP"],
      icon: Brain,
      github:
        "https://github.com/Aseel205/Distributed-systems-programming/tree/main/Semantic%20Similarity%20-%20Classification%20by%20various",
      features: [
        "Google N-Gram processing",
        "Distributed pipeline",
        "ML-based similarity scoring",
        "Scalable architecture"
      ],
      color: "accent-purple",
      category: "Cloud & Distributed Programming"
    },
    {
      title: "Hebrew Trigram Word Prediction (MapReduce)",
      description:
        "Large-scale text processing project using MapReduce to compute conditional trigram probabilities for next-word prediction.",
      techStack: ["Java", "AWS EMR", "MapReduce", "Distributed Systems", "Hadoop"],
      icon: Brain,
      github:
        "https://github.com/Aseel205/Distributed-systems-programming/tree/main/Knowledge-base%20for%20Word%20Prediction",
      features: [
        "Trigram analysis",
        "Conditional probability",
        "Stop-word filtering",
        "Fully distributed pipeline"
      ],
      color: "violet-400",
      category: "Cloud & Distributed Programming"
    },
    {
      title: "Cloud File Processor (EC2 + SQS + S3)",
      description:
        "Distributed system for processing PDF documents using EC2 worker nodes, SQS job queues, and S3 storage.",
      techStack: ["Python", "AWS EC2", "AWS S3", "AWS SQS", "Docker", "Distributed Systems"],
      icon: Cloud,
      github:
        "https://github.com/Aseel205/Distributed-systems-programming/tree/main/PDF%20Document%20Conversion%20in%20the%20Cloud/implementation",
      features: [
        "Parallel worker execution",
        "Fault-tolerant queue design",
        "Autoscaling architecture",
        "Cloud-native orchestration"
      ],
      color: "cyan-400",
      category: "Cloud & Distributed Programming"
    },

    // ============================
    // GRAPHICS & COMPUTER VISION
    // ============================
    {
      title: "Ray Tracing Engine",
      description:
        "3D rendering engine built with C++ and OpenGL implementing realistic lighting, reflections, shadows, transparency, and anti-aliasing.",
      techStack: ["C++", "OpenGL", "3D Rendering", "Shader Programming"],
      icon: Monitor,
      github:
        "https://github.com/Aseel205/ComputerGraphics/tree/main/Ray%20Tracing%20Implementation",
      features: ["Physically-based shading", "Anti-aliasing", "Optimized ray traversal"],
      color: "blue-400",
      category: "Graphics & Computer Vision"
    },
    {
      title: "Rubik’s Cube Interactive Renderer",
      description:
        "3D Rubik’s Cube visualization using OpenGL with camera controls, perspective projection, and real-time animation.",
      techStack: ["C++", "OpenGL", "Graphics Programming"],
      icon: Monitor,
      github:
        "https://github.com/Aseel205/ComputerGraphics/tree/main/Rubik's%20Cube%20Renderer",
      features: ["Camera controls", "Real-time rotation", "Mesh rendering", "Color picking"],
      color: "orange-400",
      category: "Graphics & Computer Vision"
    },
    {
      title: "Classical Image Processing Toolkit",
      description:
        "Implementation of classical image processing algorithms including Canny edges, dithering, halftoning, and grayscale transformation.",
      techStack: ["C++", "OpenCV", "Image Processing"],
      icon: Monitor,
      github:
        "https://github.com/Aseel205/ComputerGraphics/tree/main/Image%20Filters%20and%20Processing/computerGraphics-main",
      features: ["Canny detection", "Floyd-Steinberg dithering", "Halftone rendering"],
      color: "red-400",
      category: "Graphics & Computer Vision"
    },

    // ============================
    // MACHINE LEARNING & DATA
    // ============================
    {
      title: "Deep Learning Action Segmentation (Video Workflow Analysis)",
      description:
        "Deep learning pipeline for segmenting and classifying actions in workflow videos, including preprocessing, feature extraction, training, and evaluation.",
      techStack: ["Python", "Computer Vision", "Machine Learning", "Deep Learning"],
      icon: Brain,
      github: "https://github.com/Aseel205/Video-Action-Segmentation",
      features: [
        "Video preprocessing & labeling",
        "Feature extraction pipeline",
        "Deep learning training & evaluation",
        "Accurate temporal segmentation"
      ],
      color: "purple-400",
      category: "Machine Learning & Data"
    },
    {
      title: "Machine Learning Algorithms Collection",
      description:
        "Comprehensive collection of ML implementations including regression, classification, preprocessing, EDA, visualization, and PyTorch deep learning experiments.",
      techStack: ["Python", "NumPy", "Pandas", "Scikit-Learn", "PyTorch", "Matplotlib"],
      icon: Brain,
      github: "https://github.com/Aseel205/Machine-learning",
      features: [
        "Classification & regression",
        "Feature engineering",
        "EDA tools",
        "Deep learning experiments"
      ],
      color: "teal-400",
      category: "Machine Learning & Data"
    },

    // ============================
    // FULL STACK DEVELOPMENT
    // ============================
    {
      title: "After-School Courses Multi-Tenant SaaS",
      description:
        "Full commercial SaaS platform built with microservices and tenant isolation, supporting scheduling, teachers, students, notifications, and cloud deployment.",
      techStack: [".NET Core 7", "React", "PostgreSQL", "Docker", "AWS", "Microservices"],
      icon: Server,
      github: "https://github.com/Aseel205/After-School-SaaS",
      features: [
        "Multi-tenant architecture",
        "Real-time notifications",
        "Advanced scheduling system",
        "Cloud-native deployment"
      ],
      color: "tech-glow",
      category: "Full Stack"
    },
    {
      title: "Notes Manager (MERN Full Stack)",
      description:
        "Full-stack notes management app with authentication, pagination, secure access control, and modern React UI.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
      icon: ExternalLink,
      github: "https://github.com/Aseel205/Notes-Manager-Full-Stack-MERN-App-",
      features: ["JWT authentication", "Pagination", "Role-based access", "REST API design"],
      color: "pink-400",
      category: "Full Stack"
    },

    // ============================
    // CYBERSECURITY & TOOLING
    // ============================
    {
      title: "Web Vulnerability Scanner",
      description:
        "Full-stack security scanner with 15+ vulnerability checks, Chrome extension integration, Dockerized backend workers, and a React dashboard for results.",
      techStack: ["Python", "Flask", "React", "TypeScript", "Docker", "Cybersecurity"],
      icon: Shield,
      github: "https://github.com/Aseel205/Web-Vulnerability-Scanner",
      features: [
        "XSS, SQLi, CSRF detection",
        "Subdomain & port scanning",
        "Tech stack fingerprinting",
        "Chrome extension",
        "Worker-based isolation"
      ],
      color: "rose-400",
      category: "Cybersecurity & Tooling"
    },

    // ============================
    // SYSTEMS & NETWORKING
    // ============================
    {
      title: "xv6 Operating System Extensions",
      description:
        "Kernel-level work on xv6 including new system calls, shared memory, and updates to the virtual memory subsystem.",
      techStack: ["C", "Operating Systems", "Kernel Programming", "Memory Management"],
      icon: NetworkIcon,
      github: "https://github.com/Aseel205/operating-Systems",
      features: ["Custom syscalls", "Shared memory regions", "Page table updates"],
      color: "blue-400",
      category: "Systems & Networking"
    },
    {
      title: "TFTP Server & Client",
      description:
        "Multithreaded implementation of a TFTP server/client with custom protocol handling and concurrent file transfers.",
      techStack: ["Java", "Networking", "TCP/UDP", "Threads"],
      icon: NetworkIcon,
      github:
        "https://github.com/Aseel205/Systems-programming/tree/main/TFTP%20Server%20client",
      features: ["Thread-per-client model", "UDP/TCP support", "Broadcast features"],
      color: "green-400",
      category: "Systems & Networking"
    },
    {
      title: "Set Card Game (Multithreaded Java)",
      description:
        "Fully multithreaded implementation of the Set game with event-based GUI, concurrency, and real-time interactions.",
      techStack: ["Java", "Threads", "OOP"],
      icon: Brain,
      github:
        "https://github.com/Aseel205/Systems-programming/tree/main/Set%20Card%20Game",
      features: ["Threading", "UI events", "Real-time game logic"],
      color: "yellow-400",
      category: "Systems & Networking"
    },
    {
      title: "Warehouse Management System (Rule of 5)",
      description:
        "C++ OOP project modeling warehouse operations with strong focus on memory safety, object lifecycle management, and the Rule of Five.",
      techStack: ["C++", "OOP", "Memory Management", "Data Structures"],
      icon: Server,
      github:
        "https://github.com/Aseel205/Systems-programming/tree/main/WareHouse/Spl",
      features: ["Volunteer management", "Order handling", "Safe memory design"],
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
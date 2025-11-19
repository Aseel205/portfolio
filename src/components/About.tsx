import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Heart, Zap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-tech-glow">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Software engineer passionate about building scalable backend systems,
              cloud-native architectures, and intelligent technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Main Bio */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Turning Ideas Into Scalable Systems
                </h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a final-semester Computer Science student at 
                  <span className="text-tech-glow font-semibold"> Ben-Gurion University</span> 
                  with a <span className="text-primary font-semibold">GPA of 88</span>. My experience spans 
                  <span className="text-tech-glow"> backend engineering, distributed systems, systems programming, and cloud computing</span>.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I build reliable and efficient software using technologies like 
                  <span className="text-primary"> C/C++, Python, Java, JavaScript, React, Node.js, .NET Core</span>, 
                  and cloud stacks such as <span className="text-accent-purple">AWS</span>.  
                  My focus is on <span className="text-tech-glow">performance, scalability, and clean architecture</span>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I love solving complex engineering problems — from kernel-level debugging in xv6,
                  to distributed NLP systems on AWS, to cloud-native microservices.
                  Every challenge is an opportunity to engineer better systems.
                </p>
              </Card>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">

              {/* Education */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-tech-glow mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  B.Sc. Computer Science – Ben-Gurion University 2025
                </p>
                <p className="text-primary font-semibold">GPA: 88 </p>
              </Card>

              {/* Place-IL */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-400 mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Place-IL Talent Pool</h4>
                </div>
                <p className="text-muted-foreground">
                  Selected for Israel’s national talent pool for software engineers, providing a direct pipeline to top tech internships.
                </p>
              </Card>

              {/* MST Program */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-400 mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">MST Microservices Program</h4>
                </div>
                <p className="text-muted-foreground">
                  Completing a 4.5-month, 300-hour program in Java, Spring Boot, microservices, Docker, Kubernetes, and DevOps tooling.
                </p>
              </Card>

              {/* Leadership */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-accent-purple mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Leadership</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Academic Mentor – Guided 22 students in Data Structures</li>
                </ul>
              </Card>

              {/* Interests */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 hover:shadow-glow shadow-card transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-400 mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Interests</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gaming </li>
                  <li>• Coding & Algorithmic Challenges </li>
                  <li>• 3D Graphics & Visualization </li>
                  <li>• Mentoring  & Continuous Learning </li>

                </ul>
              </Card>

              Gaming 


              {/* Core Values */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-400 mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Core Values</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Excellence in engineering</li>
                  <li>• Continuous learning</li>
                  <li>• Building scalable, efficient systems</li>
                </ul>
              </Card>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

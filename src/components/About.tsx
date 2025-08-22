import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Heart, Zap } from 'lucide-react';

const About = () => {
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
              Passionate about creating intelligent, scalable software systems that solve real-world problems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Bio */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Building the Future, One Line at a Time
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a final-semster Computer Science student at <span className="text-tech-glow font-semibold">Ben-Gurion University</span> 
                  with a <span className="text-primary font-semibold">GPA of 88</span>. My expertise spans 
                  <span className="text-tech-glow"> systems programming, web development, and cloud computing</span>.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I specialize in creating efficient, scalable solutions using technologies like 
                  <span className="text-primary"> C/C++, Python, Java, JavaScript, React, Node.js, .NET Core</span>, and cloud platforms. 
                  My work focuses on <span className="text-tech-glow">performance optimization</span> and 
                  <span className="text-accent-purple"> intelligent system design</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I view coding as a puzzle-solving journey—each challenge is an opportunity to optimize, 
                  innovate, and learn. Whether tackling system bottlenecks or implementing machine learning algorithms, 
                  I'm driven by curiosity and the pursuit of excellence.
                </p>
              </Card>
            </motion.div>

            {/* Right Column - Fun Facts & Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-tech-glow mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  B.Sc. Computer Science at Ben-Gurion University
                </p>
                <p className="text-primary font-semibold">GPA: 88.4 | Expected graduation: 2025</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-accent-purple mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Leadership</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Academic Mentor - Guiding fellow students</li>
                  <li>• Peer Supporter - Community building</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-400 mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Interests</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gym Enthusiast - Physical and mental fitness</li>
                  <li>• System Optimization - Performance tuning</li>
                  <li>• Machine Learning - AI innovation</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-400 mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Core Values</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Excellence in every line of code</li>
                  <li>• Continuous learning and growth</li>
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
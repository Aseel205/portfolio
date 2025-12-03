import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Rocket, Lightbulb } from "lucide-react";

const WhyMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const reasons = [
    {
      title: "Strong Computer Science Foundation",
      icon: Lightbulb,
      text: "Deep understanding of algorithms, operating systems, distributed systems, and machine learning from rigorous university courses and real projects.",
      color: "text-tech-glow"
    },
    {
      title: "Backend & Systems Engineering Focus",
      icon: Target,
      text: "Hands-on experience building scalable backend systems, cloud-native architectures, and distributed pipelines using C/C++, Python, Java, .NET, and AWS.",
      color: "text-primary"
    },
    {
      title: "Problem Solver & Fast Learner",
      icon: Rocket,
      text: "I thrive on challenging engineering problems — from kernel-level debugging in xv6 to high-performance MapReduce systems and cloud microservices.",
      color: "text-accent-purple"
    },
    {
      title: "Leadership & Collaboration",
      icon: Sparkles,
      text: "Strong communicator and mentor — guided 22 students in Data Structures while driving teamwork, clarity, and continuous improvement.",
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
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
              Why <span className="text-tech-glow">Work With Me?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What I bring to every team — from strong fundamentals to real-world engineering experience.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div key={reason.title} variants={itemVariants}>
                  <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <Icon className={`h-10 w-10 mr-3 ${reason.color}`} />
                      <h3 className="text-2xl font-semibold text-foreground">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {reason.text}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;

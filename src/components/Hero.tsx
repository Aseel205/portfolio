import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import aseelProfile from '@/assets/aseel-profile.png';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-tech-glow rounded-full opacity-60"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-intense">
              <img
                src={aseelProfile}
                alt="Aseel Biadsy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-tech-glow/20 to-accent-purple/20 blur-xl" />
          </motion.div>

          {/* Text Content */}
          <div className="text-left lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-foreground">Aseel</span>
              <br />
              <span className="text-tech-glow">Biadsy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl"
            >
              Junior Software Engineer | Backend, Cloud Systems & AI Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl"
            >
              Computer Science graduate from Ben-Gurion University passionate about solving 
              real-world problems through efficient, scalable systems and intelligent software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProjects}
                className="text-lg px-8 py-4"
              >
                View My Work
              </Button>
        
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground cursor-pointer"
            onClick={scrollToProjects}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
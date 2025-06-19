import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Code2, Zap, Heart, Lightbulb } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const networkNodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.2,
  }));

  const philosophyPoints = [
    "Technology should solve real problems",
    "Great tools make great developers", 
    "The future is cross-chain",
    "Code with purpose, build with passion"
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-persian-pattern opacity-10"></div>
        
        {/* Floating Network Nodes */}
        {networkNodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute w-2 h-2 bg-persian-gold rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {networkNodes.slice(0, 8).map((node, i) => (
            <motion.line
              key={i}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${networkNodes[(i + 1) % networkNodes.length].x}%`}
              y2={`${networkNodes[(i + 1) % networkNodes.length].y}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, delay: i * 0.4 }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="w-96 h-96 bg-gradient-radial from-persian-gold/20 to-transparent rounded-full blur-xl"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-3 bg-gradient-to-r from-persian-blue to-persian-gold rounded-full"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-persian-gold font-mono text-sm">Builder • Thinker • Problem Solver</span>
            </div>
            
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Morteza
              <span className="block bg-gradient-to-r from-persian-gold to-persian-rose bg-clip-text text-transparent">
                Shojaei
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mb-4">
                I believe in building technology that{' '}
                <span className="text-persian-gold font-semibold">connects worlds</span> and{' '}
                <span className="text-persian-rose font-semibold">empowers people</span>
              </p>
              <p className="text-lg text-blue-200">
                Where others see complexity, I see opportunity to create elegant solutions
              </p>
            </motion.div>
          </motion.div>

          {/* Philosophy Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex items-center space-x-3"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="p-2 bg-persian-gold/20 rounded-lg">
                  {index === 0 && <Heart className="w-4 h-4 text-persian-gold" />}
                  {index === 1 && <Zap className="w-4 h-4 text-persian-gold" />}
                  {index === 2 && <Lightbulb className="w-4 h-4 text-persian-gold" />}
                  {index === 3 && <Code2 className="w-4 h-4 text-persian-gold" />}
                </div>
                <span className="text-blue-100 text-sm font-medium">{point}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-persian-blue to-persian-gold text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span>Discover My Journey</span>
                <Zap className="w-4 h-4 group-hover:animate-bounce" />
              </span>
            </motion.button>

            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/mortezashojaei', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:mshojaei179@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex items-center justify-center space-x-2 text-blue-200"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Remote • Tehran, Iran</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
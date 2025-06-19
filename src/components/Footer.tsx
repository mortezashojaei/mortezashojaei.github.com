import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Heart,
  ExternalLink,
  Code2,
  Coffee
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Stack Overflow',
      icon: ExternalLink,
      href: '#',
      color: 'hover:text-orange-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:mshojaei179@gmail.com',
      color: 'hover:text-persian-gold'
    }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Next Big Thing', href: '#next' },
  ];

  const interests = [
    'Cross-chain Protocols',
    'Developer Experience',
    'Zero-Knowledge Proofs',
    'Account Abstraction',
    'DeFi Innovation',
    'Web3 Education'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-persian-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-persian-blue to-persian-gold rounded-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Morteza Shojaei</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Full-Stack Blockchain Engineer passionate about building the cross-chain future. 
                Currently working on Hyperlane protocol integration and always open to meaningful collaborations.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span>Tehran, Iran • Working Remotely</span>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-white/5 rounded-lg border border-white/10 text-gray-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-persian-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-persian-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-persian-gold">Current Interests</h4>
            <div className="space-y-2">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="text-gray-400 text-sm flex items-center space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1 h-1 bg-persian-rose rounded-full"></div>
                  <span>{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-persian-rose" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-persian-gold" />
            <span>in Tehran</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center space-x-4"
          >
            <span>© 2025 Morteza Shojaei</span>
            <span>•</span>
            <span>Building the future, one block at a time</span>
          </motion.div>
        </div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4"
        >
          <div className="text-xs text-gray-600 font-mono">
            // سلام دنیا 🌍
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
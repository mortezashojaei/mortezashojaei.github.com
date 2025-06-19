import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'next', label: 'Next Big Thing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-persian-blue' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            MS
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? isScrolled 
                      ? 'text-persian-blue' 
                      : 'text-persian-gold'
                    : isScrolled
                      ? 'text-gray-600 hover:text-persian-blue'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isScrolled 
                        ? 'bg-gradient-to-r from-persian-blue to-persian-gold' 
                        : 'bg-persian-gold'
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:mshojaei179@gmail.com"
              className={`text-sm font-medium px-6 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-white bg-gradient-to-r from-persian-blue to-persian-gold hover:shadow-lg'
                  : 'text-persian-blue bg-white hover:bg-gray-100'
              }`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-persian-blue' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-persian-blue bg-persian-blue/10'
                    : 'text-gray-600 hover:text-persian-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4 border-t border-gray-100">
              <a
                href="mailto:mshojaei179@gmail.com"
                className="block w-full text-center text-sm font-medium text-white bg-gradient-to-r from-persian-blue to-persian-gold px-6 py-3 rounded-full"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
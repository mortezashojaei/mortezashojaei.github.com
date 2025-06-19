import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Heart, Users, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Solidity', 
    'Blockchain', 'EVM', 'zkSync', 'Next.js', 'AWS', 'CI/CD'
  ];

  const languages = [
    { name: 'Persian', level: 'Native', flag: '🇮🇷' },
    { name: 'English', level: 'Fluent', flag: '🇺🇸' },
    { name: 'Azeri', level: 'Native', flag: '🇦🇿' },
  ];

  const values = [
    {
      icon: Code,
      title: 'Developer Experience',
      description: 'I believe great tools make great developers. Every line of code should serve a purpose and enhance the developer journey.'
    },
    {
      icon: Globe,
      title: 'Cross-Chain Future',
      description: 'The future is multi-chain. I build bridges that connect ecosystems and enable seamless value transfer across networks.'
    },
    {
      icon: Heart,
      title: 'Real Problems',
      description: 'Technology should solve real problems for real people. I focus on building products that make a meaningful difference.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-persian-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-persian-blue mb-6">
            The Story Behind the Code
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From Tehran to the global blockchain ecosystem, my journey is about connecting worlds—
            both technical and cultural.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-persian-gold/20 to-persian-rose/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-persian-blue to-persian-gold rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-persian-blue">Who I Am</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm a full-stack blockchain developer with 6+ years of experience building smart contracts, 
                  APIs, and web applications on EVM-based systems. Currently working as a Product Engineer at 
                  Abacus Works (Hyperlane), where I integrate cross-chain protocols and improve developer tooling.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Born and raised in Iran, I've been working remotely with global teams for years, bringing 
                  a unique multicultural perspective to every project. I speak Persian, English, and Azeri, 
                  which helps me connect with diverse teams and communities.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-persian-blue">Languages I Speak:</h4>
                  <div className="flex flex-wrap gap-4">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-gray-500">({lang.level})</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-persian-blue mb-6 flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-persian-blue to-persian-gold rounded-lg">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <span>Technical Expertise</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-persian-blue/10 to-persian-gold/10 border border-persian-blue/20 rounded-full text-persian-blue font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 58, 138, 0.1)' }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-persian-blue mb-6 flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-persian-blue to-persian-gold rounded-lg">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <span>Education</span>
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-persian-blue/10 to-persian-gold/10 rounded-lg">
                      <div className="w-6 h-6 bg-gradient-to-r from-persian-blue to-persian-gold rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-persian-blue text-lg">Bachelor of Computer Software Engineering</h4>
                      <p className="text-gray-600">Kharazmi University, Tehran, Iran</p>
                      <p className="text-sm text-gray-500">2017 - 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-persian-blue text-center mb-12">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-gradient-to-r from-persian-blue to-persian-gold rounded-lg w-fit mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-persian-blue mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
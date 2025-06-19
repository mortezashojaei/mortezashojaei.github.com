import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Users, 
  Lightbulb, 
  Globe, 
  Code, 
  Heart, 
  Zap, 
  Target,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const NextBigThing: React.FC = () => {
  const visionAreas = [
    {
      icon: Globe,
      title: 'Cross-Chain Everything',
      description: 'Building a truly interoperable future where assets, data, and applications flow seamlessly across all blockchain networks.',
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Universal cross-chain protocols',
        'Chain-agnostic applications',
        'Seamless user experiences'
      ]
    },
    {
      icon: Code,
      title: 'Developer Tooling Revolution',
      description: 'Creating tools that make blockchain development as intuitive as traditional web development, lowering barriers for millions of developers.',
      color: 'from-purple-500 to-pink-500',
      details: [
        'One-click deployment tools',
        'Visual smart contract builders',
        'Integrated testing environments'
      ]
    },
    {
      icon: Users,
      title: 'Mainstream Adoption',
      description: 'Building products that bring blockchain benefits to everyday users without them needing to understand the underlying complexity.',
      color: 'from-green-500 to-emerald-500',
      details: [
        'Invisible blockchain UX',
        'Consumer-friendly applications',
        'Educational platforms'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation in DeFi',
      description: 'Exploring new financial primitives and mechanisms that can provide real value and solve actual problems in the financial system.',
      color: 'from-orange-500 to-red-500',
      details: [
        'Novel financial instruments',
        'Risk management tools',
        'Automated portfolio strategies'
      ]
    }
  ];

  const collaborationAreas = [
    {
      title: 'Open Source Projects',
      description: 'Contributing to and leading open source blockchain infrastructure projects',
      icon: Heart,
      interests: ['Protocol development', 'Developer tools', 'Educational content']
    },
    {
      title: 'Startup Ventures',
      description: 'Co-founding or joining early-stage startups solving real-world problems with blockchain',
      icon: Rocket,
      interests: ['Cross-chain solutions', 'DeFi innovations', 'Web3 infrastructure']
    },
    {
      title: 'Research & Development',
      description: 'Exploring cutting-edge blockchain technologies and their practical applications',
      icon: Target,
      interests: ['Zero-knowledge proofs', 'Layer 2 scaling', 'Account abstraction']
    }
  ];

  return (
    <section id="next" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-persian-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-persian-rose/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        {/* Animated Stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-persian-gold" />
            </motion.div>
            <span className="text-persian-gold font-mono text-lg">The Future Awaits</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            My Next
            <span className="block bg-gradient-to-r from-persian-gold to-persian-rose bg-clip-text text-transparent">
              Big Thing
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The blockchain space is still in its infancy. Here's where I see the future heading 
            and how I plan to be part of shaping it.
          </p>
        </motion.div>

        {/* Vision Areas */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center space-x-3"
          >
            <Zap className="w-6 h-6 text-persian-gold" />
            <span>Vision for the Future</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {visionAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${area.color} mb-4`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-white">{area.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                  
                  <ul className="space-y-2">
                    {area.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-persian-gold rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collaboration Areas */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center space-x-3"
          >
            <Users className="w-6 h-6 text-persian-gold" />
            <span>Open to Collaborate</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {collaborationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-persian-gold/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-persian-gold/20 rounded-lg">
                    <area.icon className="w-5 h-5 text-persian-gold" />
                  </div>
                  <h4 className="font-bold text-white">{area.title}</h4>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{area.description}</p>
                
                <div className="space-y-1">
                  {area.interests.map((interest, interestIndex) => (
                    <div key={interestIndex} className="flex items-center space-x-2">
                      <ArrowRight className="w-3 h-3 text-persian-gold" />
                      <span className="text-xs text-gray-400">{interest}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-persian-blue/20 to-persian-gold/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">Let's Build the Future Together</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              If any of these visions resonate with you, or if you have ideas that could benefit from my expertise, 
              I'd love to hear from you. The best innovations happen when great minds collaborate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:mshojaei179@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-persian-gold to-persian-rose text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="#"
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Calendar
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextBigThing;
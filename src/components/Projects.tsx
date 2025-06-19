import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, Users, DollarSign, Activity, Shield, Zap, Code2, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Hyperlane Cross-Chain Protocol',
      company: 'Abacus Works',
      description: 'Leading integration of Hyperlane protocol on zkSync and StarkNet networks, developing compiler tooling, SDK, and CLI to enable seamless cross-chain communication.',
      impact: 'Enhancing cross-chain interoperability for thousands of developers',
      technologies: ['Hyperlane', 'zkSync', 'StarkNet', 'TypeScript', 'Smart Contracts'],
      category: 'current',
      icon: Activity,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Modular Paymaster on zkSync Era',
      company: 'txFusion',
      description: 'Full-stack development of a gas abstraction solution enabling gasless transactions. Audited by Nethermind and processing 200,000+ transactions across multiple DeFi protocols.',
      impact: '200,000+ transactions processed, integrated with major DeFi platforms',
      technologies: ['Solidity', 'zkSync Era', 'React', 'TypeScript', 'NestJS'],
      category: 'featured',
      icon: Zap,
      gradient: 'from-persian-blue to-persian-gold',
      stats: [
        { label: 'Transactions', value: '200K+' },
        { label: 'Integrations', value: '5+' },
        { label: 'Security', value: 'Audited' },
      ],
    },
    {
      title: 'wstETH Canonical Bridge',
      company: 'txFusion',
      description: 'Contributed to smart contract design and deployment enabling secure bridging of Lido\'s wstETH to zkSync, facilitating institutional-grade cross-chain asset transfers.',
      impact: '$6M+ in cross-chain asset transfers facilitated',
      technologies: ['Solidity', 'Lido Protocol', 'zkSync', 'Cross-chain'],
      category: 'defi',
      icon: DollarSign,
      gradient: 'from-blue-500 to-purple-600',
      stats: [
        { label: 'Volume', value: '$6M+' },
        { label: 'Protocol', value: 'Lido' },
        { label: 'Network', value: 'zkSync' },
      ],
    },
    {
      title: 'txSync Portal & Bridge',
      company: 'txFusion',
      description: 'Led a team of 4 developers to rebuild the main portal for Ethereum-zkSync transfers. Complete redesign and relaunch supporting 500,000+ users with improved UX and performance.',
      impact: '500,000+ users supported with seamless bridging experience',
      technologies: ['React', 'NestJS', 'Solidity', 'AWS', 'Team Leadership'],
      category: 'infrastructure',
      icon: Users,
      gradient: 'from-purple-500 to-pink-600',
      stats: [
        { label: 'Users', value: '500K+' },
        { label: 'Team Size', value: '4' },
        { label: 'Platform', value: 'Web3' },
      ],
    },
    {
      title: 'Sophon Early Partners Program',
      company: 'txFusion',
      description: 'Developed smart contracts and backend infrastructure for managing whitelist and handling massive transaction volume with integrated Paymaster for sponsored fees.',
      impact: '70M+ transactions handled with sponsored gas fees',
      technologies: ['Solidity', 'NestJS', 'Paymaster', 'Whitelist Management'],
      category: 'infrastructure',
      icon: Shield,
      gradient: 'from-orange-500 to-red-600',
      stats: [
        { label: 'Transactions', value: '70M+' },
        { label: 'Type', value: 'Sponsored' },
        { label: 'Program', value: 'Partners' },
      ],
    },
    {
      title: 'IBetyou P2P Betting DApp',
      company: 'Shardlabs',
      description: 'Complete redevelopment of cross-chain P2P betting platform with smart contracts and frontend. Achieved 90% reduction in critical bugs and 30% improvement in user retention.',
      impact: '90% bug reduction, 30% retention improvement',
      technologies: ['Hardhat', 'Web3.js', 'Ethers.js', 'Cross-chain', 'DeFi'],
      category: 'dapp',
      icon: Award,
      gradient: 'from-indigo-500 to-blue-600',
      stats: [
        { label: 'Bug Reduction', value: '90%' },
        { label: 'Retention', value: '+30%' },
        { label: 'Type', value: 'P2P' },
      ],
    },
  ];

  const openSourceProjects = [
    {
      title: 'zkSync Era Paymaster Examples',
      description: 'Comprehensive collection of Paymaster implementations for zkSync Era, demonstrating various gas sponsorship patterns and use cases.',
      technologies: ['Solidity', 'zkSync Era', 'Hardhat', 'TypeScript'],
      stars: '150+',
      icon: Code2,
      gradient: 'from-cyan-500 to-blue-600',
      githubUrl: 'https://github.com/mortezashojaei/zksync-paymaster-examples',
      impact: 'Educational resource for zkSync developers worldwide'
    },
    {
      title: 'Cross-Chain Bridge Toolkit',
      description: 'Open-source toolkit for building secure cross-chain bridges with standardized interfaces and security best practices.',
      technologies: ['Solidity', 'TypeScript', 'Hardhat', 'OpenZeppelin'],
      stars: '89+',
      icon: Activity,
      gradient: 'from-purple-500 to-pink-600',
      githubUrl: 'https://github.com/mortezashojaei/cross-chain-toolkit',
      impact: 'Simplifying cross-chain development for the community'
    },
    {
      title: 'Smart Contract Security Patterns',
      description: 'Collection of secure smart contract patterns and anti-patterns with detailed explanations and test cases.',
      technologies: ['Solidity', 'Foundry', 'Security', 'Documentation'],
      stars: '67+',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-600',
      githubUrl: 'https://github.com/mortezashojaei/solidity-security-patterns',
      impact: 'Helping developers write more secure smart contracts'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.category === 'featured').length },
    { id: 'current', label: 'Current', count: projects.filter(p => p.category === 'current').length },
    { id: 'opensource', label: 'Open Source', count: openSourceProjects.length },
    { id: 'defi', label: 'DeFi', count: projects.filter(p => p.category === 'defi').length },
    { id: 'infrastructure', label: 'Infrastructure', count: projects.filter(p => p.category === 'infrastructure').length },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return [...projects, ...openSourceProjects.map(p => ({ ...p, category: 'opensource' }))];
    }
    if (activeCategory === 'opensource') {
      return openSourceProjects.map(p => ({ ...p, category: 'opensource' }));
    }
    return projects.filter(project => project.category === activeCategory);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-persian-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-persian-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-persian-blue mb-6">
            Projects That Move the Needle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From processing millions of transactions to facilitating cross-chain transfers worth millions—
            these projects showcase real-world blockchain impact and open-source contributions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-persian-blue to-persian-gold text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            const isOpenSource = project.category === 'opensource';
            
            return (
              <motion.div
                key={`${project.title}-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                layout
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex items-center space-x-2">
                          {isOpenSource && project.stars && (
                            <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                              <Star className="w-3 h-3" />
                              <span className="text-xs font-medium">{project.stars}</span>
                            </div>
                          )}
                          {project.company && (
                            <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                              {project.company}
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight">{project.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Impact */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-persian-gold rounded-full"></div>
                        <span className="text-sm font-semibold text-gray-700">Impact</span>
                      </div>
                      <p className="text-persian-blue font-semibold">{project.impact}</p>
                    </div>

                    {/* Stats */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-lg font-bold text-persian-blue">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-persian-rose rounded-full"></div>
                        <span className="text-sm font-semibold text-gray-700">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={isOpenSource ? project.githubUrl : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                      <motion.button
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-persian-blue to-persian-gold text-white rounded-lg hover:shadow-lg transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-persian-blue to-persian-gold rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more of my work?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              These are just highlights from my journey. I've contributed to many more projects, 
              open-source initiatives, and research in the blockchain space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/mortezashojaei"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-persian-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View GitHub Profile
              </motion.a>
              <motion.a
                href="mailto:mshojaei179@gmail.com"
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-persian-blue transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
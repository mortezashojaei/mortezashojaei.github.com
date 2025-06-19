import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp, Award, Briefcase } from 'lucide-react';

const Journey: React.FC = () => {
  const experiences = [
    {
      title: 'Product Engineer',
      company: 'Abacus Works (Hyperlane)',
      period: '09/2024 – present',
      location: 'Remote, US',
      type: 'current',
      achievements: [
        'Integrated Hyperlane protocol on ZKSync-based networks, modifying smart contracts and implementing compiler tooling, SDK, and CLI',
        'Implemented Hyperlane protocol integration on StarkNet-based networks, including compiler tooling, smart contract build files, SDK, and CLI',
        'Refactored CLI and SDK to optimize Hyperlane contract deployments, speeding up deployment process and improving developer experience',
      ],
      skills: ['Hyperlane', 'zkSync', 'StarkNet', 'Smart Contracts', 'TypeScript', 'CLI Development'],
    },
    {
      title: 'Full-Stack Blockchain Engineer',
      company: 'txFusion',
      period: '07/2023 – present',
      location: 'Remote, Serbia',
      type: 'featured',
      achievements: [
        'Led full-stack development of a modular Paymaster on zkSync Era—including Solidity smart contracts (audited by Nethermind), TypeScript back-end, and React front-end—processing 200,000+ transactions',
        'Contributed to the design and deployment of smart contracts enabling canonical wstETH bridge to zkSync, facilitating $6M+ in cross-chain asset transfers',
        'Led a team of 4 developers to rebuild and launch txSync as main portal for transferring funds between Ethereum and zkSync networks, supporting 500,000+ users',
        'Developed Solidity smart contracts for Sophon\'s Early Partners Program, managing whitelist and handling 70M+ transactions',
        'Mentored junior engineers and conducted code reviews to ensure maintainable, high-quality code',
      ],
      skills: ['zkSync Era', 'Solidity', 'React', 'NestJS', 'AWS', 'Team Leadership'],
    },
    {
      title: 'Full-Stack Blockchain Engineer',
      company: 'Shardlabs',
      period: '03/2022 – 06/2023',
      location: 'Remote, Croatia',
      type: 'growth',
      achievements: [
        'Led development on multiple blockchain projects, including P2P betting DApp and AMM project using Hardhat, Web3.js, Ethers.js',
        'Redeveloped IBetyou project end-to-end, including smart contracts and front-end, resulting in cross-chain, bug-free application',
        'Reduced critical bugs by 90% and improved user retention by 30%',
        'Conducted R&D on Ethereum\'s ZK scaling solutions, including zkSync and Polygon ZKEVM, and Account Abstraction',
      ],
      skills: ['Hardhat', 'Web3.js', 'Ethers.js', 'DeFi', 'Account Abstraction', 'R&D'],
    },
    {
      title: 'Full-Stack Engineer',
      company: 'FANAP',
      period: '06/2020 – 08/2021',
      location: 'Tehran, Iran',
      type: 'foundation',
      achievements: [
        'Built 3 key platforms including Parking Dashboard, AI Services, and facial recognition restaurant system, reducing manual workload by 60%',
        'Developed CMS and multimedia platform for Android TV/Box used by 100K+ users with movies, music, games, and financial tools',
        'Launched blog and multiple landing pages, boosting SEO-driven user acquisition by 3x',
        'Built scalable news aggregator crawling 50+ Persian news sources, saving 20+ hours/week',
      ],
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Oracle', 'Android TV'],
    },
    {
      title: 'Front-End Engineer',
      company: 'Pinwork',
      period: '07/2019 – 06/2020',
      location: 'Tehran, Iran',
      type: 'learning',
      achievements: [
        'Designed comprehensive admin panel managing Orders, Finance, HR, CRM, Content, Ticketing, Notifications, Pricing Calculator, and SMS Marketing',
        'Refactored legacy React codebase from class-based to functional components, reducing technical debt',
        'Delivered high-performance PWA and customer-facing website using modern technologies',
      ],
      skills: ['React.js', 'Redux', 'Material-UI', 'PWA', 'Socket.io', 'Mapbox'],
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      period: '05/2018 – 07/2019',
      location: 'Tehran, Iran',
      type: 'start',
      achievements: [
        'Built and maintained 10+ mobile-friendly websites',
        'Improved performance and traffic through SEO optimization',
        'Collaborated using Trello, Slack, and Scrum methodologies',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'SEO', 'Scrum'],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'from-green-500 to-emerald-500';
      case 'featured': return 'from-persian-blue to-persian-gold';
      case 'growth': return 'from-purple-500 to-pink-500';
      case 'foundation': return 'from-orange-500 to-red-500';
      case 'learning': return 'from-blue-500 to-cyan-500';
      case 'start': return 'from-gray-500 to-slate-500';
      default: return 'from-persian-blue to-persian-gold';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'current': return TrendingUp;
      case 'featured': return Award;
      case 'growth': return Users;
      case 'foundation': return Briefcase;
      case 'learning': return Calendar;
      case 'start': return MapPin;
      default: return Briefcase;
    }
  };

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-persian-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-persian-blue/10 rounded-full blur-3xl"></div>
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
            My Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From curious web developer to blockchain engineer—every step shaped my expertise 
            in building the decentralized future.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-persian-blue via-persian-gold to-persian-rose transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = getTypeIcon(exp.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 md:translate-y-0">
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                    <motion.div
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-persian-blue mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold text-gray-800">{exp.company}</p>
                        </div>
                        {exp.type === 'current' && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-700 text-sm leading-relaxed flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-persian-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for even layout */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'md:ml-8' : 'md:mr-8'}`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '6+', label: 'Years Experience' },
            { number: '5', label: 'Companies' },
            { number: '15+', label: 'Projects Delivered' },
            { number: '3', label: 'Languages Spoken' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-persian-blue mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
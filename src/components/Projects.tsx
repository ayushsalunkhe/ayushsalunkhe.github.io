import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, Award, Trophy, Users, Eye } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Modern E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
      github: "https://github.com/ayushsalunkhe/ecommerce-platform",
      live: "https://demo-ecommerce.ayushdev.com",
      stats: {
        stars: "120",
        users: "1.2k",
        views: "5k"
      },
      highlights: [
        "Implemented real-time inventory tracking",
        "Integrated secure payment processing",
        "Built responsive admin dashboard",
        "99.9% uptime achievement"
      ],
      achievements: ["Best Performance", "User Choice"]
    },
    {
      title: "AI-Powered Task Manager",
      description: "An intelligent task management system that uses AI to prioritize tasks and suggest optimal scheduling based on user behavior.",
      image: "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tech: ["React", "TypeScript", "OpenAI API", "TailwindCSS", "Node.js"],
      github: "https://github.com/ayushsalunkhe/ai-task-manager",
      live: "https://ai-tasks.ayushdev.com",
      stats: {
        stars: "85",
        users: "800",
        views: "3.2k"
      },
      highlights: [
        "AI-powered task prioritization",
        "Smart scheduling suggestions",
        "Real-time collaboration features",
        "Progressive Web App (PWA)"
      ],
      achievements: ["Innovation Award", "Tech Excellence"]
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "A comprehensive analytics platform that provides real-time insights and visualization for social media performance across multiple platforms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tech: ["React", "D3.js", "Firebase", "Node.js", "Express"],
      github: "https://github.com/ayushsalunkhe/social-analytics",
      live: "https://social-analytics.ayushdev.com",
      stats: {
        stars: "95",
        users: "950",
        views: "4.5k"
      },
      highlights: [
        "Real-time data visualization",
        "Cross-platform analytics",
        "Custom reporting engine",
        "Automated insights generation"
      ],
      achievements: ["Data Excellence", "UX Award"]
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive into my world of innovative web development. Each project represents a unique challenge conquered with cutting-edge technology. 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
                className="bg-gradient-to-br from-violet-950/30 via-black/50 to-purple-950/30 rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-500/50 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-6 p-4 sm:p-6">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Project stats - visible on larger screens */}
                    <div className="absolute bottom-4 left-4 right-4 justify-between items-center hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={16} /> {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1 text-violet-400">
                          <Users size={16} /> {project.stats.users}
                        </div>
                        <div className="flex items-center gap-1 text-green-400">
                          <Eye size={16} /> {project.stats.views}
                        </div>
                      </div>
                    </div>

                    {/* Project stats - visible on mobile */}
                    <div className="mt-4 flex justify-between items-center md:hidden">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={16} /> {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1 text-violet-400">
                          <Users size={16} /> {project.stats.users}
                        </div>
                        <div className="flex items-center gap-1 text-green-400">
                          <Eye size={16} /> {project.stats.views}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-violet-900/20 rounded-full text-xs sm:text-sm text-violet-300 border border-violet-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project highlights */}
                    <div className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredProject === index ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center gap-2 text-gray-400 text-sm sm:text-base"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement) => (
                        <motion.div
                          key={achievement}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-full text-xs sm:text-sm text-violet-300 border border-violet-500/20 flex items-center gap-2"
                        >
                          <Trophy size={14} />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-violet-600 text-white rounded-full flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors text-sm sm:text-base"
                      >
                        <Github size={18} />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-violet-900/20 text-violet-400 rounded-full flex items-center justify-center gap-2 hover:bg-violet-900/40 transition-colors border border-violet-500/20 text-sm sm:text-base"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-20 text-center"
        >
          <div className="inline-block p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-violet-900/20 border border-violet-500/20">
            <Award className="w-8 h-8 sm:w-12 sm:h-12 text-violet-400 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Want to see more?</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              These are just a few highlights. Visit my GitHub for more amazing projects!
            </p>
            <motion.a
              href="https://github.com/ayushsalunkhe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-violet-600 text-white rounded-full inline-flex items-center gap-2 hover:bg-violet-700 transition-colors text-sm sm:text-base"
            >
              <Github size={20} />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
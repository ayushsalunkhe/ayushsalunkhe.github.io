import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Award, Trophy, Users, Eye } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Amazon Redesigned",
      description: "A modern reimagining of Amazon's e-commerce platform with enhanced UI/UX, featuring a sleek design and improved user experience while maintaining familiar functionality.",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Redux", "Firebase"],
      github: "https://github.com/ayushsalunkhe/amazon-redesigned",
      live: "https://amazon-redesigned.vercel.app/",
      stats: {
        stars: "95",
        users: "1.5k",
        views: "4.2k"
      },
      highlights: [
        "Modern UI/UX redesign",
        "Responsive design across devices",
        "Enhanced shopping experience",
        "Real-time cart updates"
      ],
      achievements: ["UI Excellence", "Performance Optimized"]
    },
    {
      title: "Real-time Chat Application",
      description: "A feature-rich chat application enabling real-time communication with a modern interface, user authentication, and instant message delivery.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tech: ["React", "Firebase", "TailwindCSS", "WebSocket", "Authentication"],
      github: "https://github.com/ayushsalunkhe/chatapp",
      live: "https://chatapp-ayush-salunkhe.vercel.app/",
      stats: {
        stars: "88",
        users: "950",
        views: "3.8k"
      },
      highlights: [
        "Real-time messaging",
        "User authentication",
        "Message encryption",
        "Responsive design"
      ],
      achievements: ["Real-time Excellence", "Security First"]
    },
    {
      title: "Modern Calculator",
      description: "A beautifully designed calculator application with advanced mathematical functions, keyboard support, and a clean, intuitive interface.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tech: ["React", "JavaScript", "CSS3", "Math.js", "LocalStorage"],
      github: "https://github.com/ayushsalunkhe/calculator",
      live: "https://calculator-ayush-salunkhe.vercel.app/",
      stats: {
        stars: "75",
        users: "800",
        views: "2.5k"
      },
      highlights: [
        "Advanced mathematical operations",
        "Keyboard support",
        "History tracking",
        "Clean UI design"
      ],
      achievements: ["UI Minimalism", "User Friendly"]
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

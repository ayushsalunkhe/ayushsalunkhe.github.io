import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react'
import { Link } from 'react-scroll'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'React Developer', 'MERN Stack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-purple-900/20" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-violet-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-sm sm:text-base">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
            <span className="gradient-text">Ayush Salunkhe</span>
            <motion.span
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-violet-500/50 rounded-full"
              animate={{ width: ["0%", "40%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"
        >
          I'm a <span ref={el} className="text-violet-400"></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="/path-to-your-cv.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 bg-violet-600 text-white rounded-full flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/ayushsalunkhe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-violet-900/20 rounded-full text-violet-400 hover:bg-violet-900/40 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ayush-salunkhe-4aa86b280/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-violet-900/20 rounded-full text-violet-400 hover:bg-violet-900/40 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow - Now fixed at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="inline-block cursor-pointer group"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-3 rounded-full bg-violet-900/20 backdrop-blur-sm group-hover:bg-violet-900/40 transition-colors"
          >
            <ChevronDown 
              size={32} 
              className="text-violet-400 group-hover:text-violet-300 transition-colors"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-violet-400 text-sm whitespace-nowrap"
          >
            Scroll Down
          </motion.span>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
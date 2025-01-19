import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed w-full top-0 z-50 px-4 pt-4">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative max-w-5xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.3)] overflow-hidden
        before:absolute before:w-[500px] before:h-[500px] before:-left-[250px] before:-top-[250px] before:bg-violet-500/10 before:rounded-full before:blur-3xl before:z-0 before:animate-pulse
        after:absolute after:w-[500px] after:h-[500px] after:-right-[250px] after:-bottom-[250px] after:bg-indigo-500/10 after:rounded-full after:blur-3xl after:z-0 after:animate-pulse"
      >
        <div className="relative z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold relative group cursor-pointer"
            >
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent 
              animate-gradient-x hover:from-violet-500 hover:via-indigo-500 hover:to-violet-500 transition-all duration-300">
                Ayush.dev
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-400 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </motion.span>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
                  >
                    <span className="relative z-10 font-medium">{item}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-indigo-600/0 to-violet-600/0 
                      group-hover:from-violet-600/20 group-hover:via-indigo-600/20 group-hover:to-violet-600/20 rounded-xl 
                      transition-all duration-300 -skew-x-12 group-hover:skew-x-0"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-400 
                    transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="md:hidden relative group p-2 rounded-xl hover:bg-white/10 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              )}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 to-indigo-500/20 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}
      >
        <div className="rounded-xl bg-black/40 backdrop-blur-xl border border-violet-500/20 shadow-lg shadow-violet-500/10 p-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 
                transition-all duration-300 relative group overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 font-medium">{item}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600/0 to-indigo-600/0 
                  group-hover:from-violet-600/20 group-hover:to-indigo-600/20 -skew-x-12 group-hover:skew-x-0
                  transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
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
        className="max-w-5xl mx-auto bg-black/30 backdrop-blur-xl rounded-2xl border border-violet-900/20 shadow-lg shadow-violet-900/10"
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text cursor-pointer"
            >
              Ayush.dev
            </motion.span>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-xl group"
                  >
                    <span className="relative z-10">{item}</span>
                    <motion.span
                      className="absolute inset-0 bg-violet-600/0 rounded-xl group-hover:bg-violet-600/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-violet-400 group-hover:w-4/5 transition-all duration-200"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-violet-900/20 text-violet-400 hover:bg-violet-900/40 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="px-4 pt-2 pb-4 space-y-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white transition-colors rounded-xl hover:bg-violet-600/20"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.nav>
    </div>
  )
}

export default Navbar
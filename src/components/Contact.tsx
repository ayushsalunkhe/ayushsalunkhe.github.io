import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Clock, Calendar, Coffee, Sparkles, Phone, Send, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { AxiosError } from 'axios'

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  // const socialLinks = [
  //   { icon: <Github size={24} />, href: "https://github.com/ayushsalunkhe", label: "GitHub", color: "hover:bg-gray-800" },
  //   { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/ayush-salunkhe-4aa86b280/", label: "LinkedIn", color: "hover:bg-blue-600" },
  //   { icon: <Mail size={24} />, href: "mailto:ayush.salunkhe7371@gmail.com", label: "Email", color: "hover:bg-red-600" }
  // ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setFormStatus('sending')
  setErrorMessage('')

  try {
    await axios.post('http://localhost:5000/api/contact', formData)
    setFormStatus('sent')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setFormStatus('idle'), 3000)
  } catch (error) {
    console.error('Error sending message:', error)

    // Ensure error is cast to AxiosError
    const axiosError = error as AxiosError<any>

    // Safely access response.data.error if it exists
    setFormStatus('error')
    setErrorMessage(
      axiosError.response?.data?.error || 'Failed to send message. Please try again.'
    )
    setTimeout(() => setFormStatus('idle'), 3000)
  }
}


  // const testimonials = [
  //   {
  //     text: "Ayush is a fantastic developer! His attention to detail and problem-solving skills are outstanding.",
  //     author: "Tech Lead, Fortune 500 Company"
  //   },
  //   {
  //     text: "Working with Ayush was a game-changer for our project. Highly recommended!",
  //     author: "Startup Founder"
  //   }
  // ]

  return (
    <section id="contact" className="min-h-screen py-20 relative bg-gradient-to-b from-black via-violet-950/20 to-black overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-violet-500/20 rounded-full"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4 relative overflow-hidden">
            <Sparkles size={16} />
            <span className="relative z-10">Available for new opportunities</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential clients, and tech enthusiasts. 
            Let's turn your ideas into reality! ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Contact Card */}
          <motion.div
            className="relative perspective-1000"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className={`relative transition-transform duration-500 preserve-3d cursor-pointer ${isCardFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsCardFlipped(!isCardFlipped)}
            >
              {/* Front of card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-950/50 via-black/50 to-purple-950/50 border border-violet-500/20 backface-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 p-1">
                    <img
                      src="https://avatars.githubusercontent.com/u/ayushsalunkhe"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Ayush Salunkhe</h3>
                    <p className="text-gray-400">Full Stack Developer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="text-violet-400" />
                    <span>Karjat, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="text-violet-400" />
                    <span>ayush.salunkhe7371@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="text-violet-400" />
                    <span>+91 7058143876</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="text-violet-400" />
                    <span>Response time: 24 hours</span>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                  Click to see availability →
                </div>
              </div>

              {/* Back of card */}
              <div className="absolute inset-0 p-8 rounded-2xl bg-gradient-to-br from-violet-950/50 via-black/50 to-purple-950/50 border border-violet-500/20 backface-hidden rotate-y-180">
                <h3 className="text-xl font-bold mb-4">My Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-violet-400" />
                    <span>Available for full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-violet-400" />
                    <span>Flexible working hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="text-violet-400" />
                    <span>Open to remote work worldwide</span>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  Click to see contact info ←
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div className="relative">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl bg-violet-900/10 border border-violet-500/20 focus:border-violet-500/50 outline-none transition-colors text-gray-300 placeholder-gray-500"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl bg-violet-900/10 border border-violet-500/20 focus:border-violet-500/50 outline-none transition-colors text-gray-300 placeholder-gray-500"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              <div>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl bg-violet-900/10 border border-violet-500/20 focus:border-violet-500/50 outline-none transition-colors text-gray-300 placeholder-gray-500"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              {/* Form status messages */}
              <AnimatePresence mode="wait">
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-400 bg-red-950/20 px-4 py-2 rounded-lg"
                  >
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
                {formStatus === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-400 bg-green-950/20 px-4 py-2 rounded-lg"
                  >
                    <CheckCircle2 size={18} />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative overflow-hidden">
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-violet-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors relative z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'idle' && (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {formStatus === 'sent' && (
                    <>
                      Message Sent!
                      <Sparkles size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* ... */}

      </div>
    </section>
  )
}

export default Contact

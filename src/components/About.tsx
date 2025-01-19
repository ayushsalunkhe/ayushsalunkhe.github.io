import { motion } from 'framer-motion'
import { Code, GraduationCap, Briefcase, Brain, Target, Users, Lightbulb } from 'lucide-react'

const About = () => {
  const achievements = [
    { number: "15+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "30+", label: "Git Contributions" },
    { number: "3+", label: "Technical Articles" }
  ]

  const skills = [
    { name: "Problem Solving", percentage: 95 },
    { name: "Team Leadership", percentage: 90 },
    { name: "Communication", percentage: 95 },
    { name: "Technical Writing", percentage: 85 }
  ]

  const personalityTraits = [
    { icon: <Brain className="w-6 h-6" />, trait: "Analytical Mind", description: "Strong problem-solving abilities and logical thinking" },
    { icon: <Target className="w-6 h-6" />, trait: "Goal-Oriented", description: "Focused on achieving measurable results" },
    { icon: <Users className="w-6 h-6" />, trait: "Team Player", description: "Excellent collaboration and leadership skills" },
    { icon: <Lightbulb className="w-6 h-6" />, trait: "Innovative", description: "Creative approach to technical challenges" }
  ]

  return (
    <section id="about" className="min-h-screen py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 blur-xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <p className="relative text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm not just a developer; I'm a <span className="text-violet-400 font-semibold">digital craftsman</span> who transforms ideas into exceptional web experiences. With a passion for clean code and innovative solutions, I specialize in creating applications that not only work flawlessly but also deliver memorable user experiences.
            </p>
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-4 sm:p-6 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all"
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-violet-400 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {achievement.number}
              </motion.h3>
              <p className="text-sm sm:text-base text-gray-400">{achievement.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-violet-900/20"></div>
            {[
              // {
              //   year: "2023",
              //   title: "Senior Software Engineer",
              //   company: "Persistent Systems",
              //   icon: <Briefcase className="w-6 h-6" />,
              // },
              // {
              //   year: "2021",
              //   title: "Full Stack Developer",
              //   company: "Tech Innovations Ltd",
              //   icon: <Code className="w-6 h-6" />,
              // },
              {
                year: "2027",
                title: "B.Tech Computer Science",
                company: "PILLAI HOC COLLEGE OF ENGINEERING AND TECHNOLOGY",
                icon: <GraduationCap className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-8 pl-12 sm:pl-0 ${
                  index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                }`}
              >
                <div className={`flex items-center gap-4 ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}>
                  <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-900/30 border-4 border-black">
                    <div className="text-violet-400">{item.icon}</div>
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? "sm:pr-16" : "sm:pl-16"}`}>
                    <span className="text-violet-400 font-semibold text-sm sm:text-base">{item.year}</span>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-violet-900/10 rounded-lg p-6 border border-violet-900/20"
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-violet-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-violet-900/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personality Traits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalityTraits.map((trait, index) => (
            <motion.div
              key={trait.trait}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-violet-900/10 to-purple-900/10 border border-violet-500/20 hover:border-violet-500/50 transition-all">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
                <div className="text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                  {trait.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{trait.trait}</h3>
                <p className="text-gray-400">{trait.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

import { motion } from 'framer-motion'
import { Layout, Server, Workflow } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 95, years: 2, image: "https://skillicons.dev/icons?i=react" },
        { name: "TypeScript", level: 90, years: 2, image: "https://skillicons.dev/icons?i=ts" },
        { name: "JavaScript", level: 95, years: 3, image: "https://skillicons.dev/icons?i=js" },
        { name: "Redux", level: 85, years: 2, image: "https://skillicons.dev/icons?i=redux" }
      ]
    },
    {
      name: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85, years: 2, image: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express.js", level: 85, years: 2, image: "https://skillicons.dev/icons?i=express" },
        { name: "MongoDB", level: 80, years: 2, image: "https://skillicons.dev/icons?i=mongodb" },
        { name: "Firebase", level: 85, years: 1, image: "https://skillicons.dev/icons?i=firebase" }
      ]
    },
    {
      name: "Development Tools",
      icon: <Workflow className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90, years: 3, image: "https://skillicons.dev/icons?i=git" },
        { name: "VS Code", level: 95, years: 3, image: "https://skillicons.dev/icons?i=vscode" },
        { name: "Docker", level: 75, years: 1, image: "https://skillicons.dev/icons?i=docker" },
        { name: "AWS", level: 70, years: 1, image: "https://skillicons.dev/icons?i=aws" }
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mastering the art of modern web development with cutting-edge technologies
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-violet-900/20 rounded-xl text-violet-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative p-6 rounded-xl bg-gradient-to-br from-violet-900/10 to-purple-900/10 border border-violet-500/20 hover:border-violet-500/50 transition-all">
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/10 group-hover:to-purple-600/10 transition-all duration-500" />

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-violet-900/20 p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="w-8 h-8"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{skill.name}</h4>
                            <span className="text-sm text-gray-400">{skill.years} years experience</span>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-violet-400">{skill.level}%</span>
                      </div>

                      {/* Animated progress bar */}
                      <div className="h-2 bg-violet-900/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>

                      {/* Skill level indicator */}
                      <div className="mt-2 flex justify-between text-sm text-gray-400">
                        <span>Proficiency</span>
                        <span className="text-violet-400">
                          {skill.level >= 90 ? 'Expert' : 
                           skill.level >= 80 ? 'Advanced' : 
                           skill.level >= 70 ? 'Intermediate' : 'Learning'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-violet-900/20 border border-violet-500/20">
            <span className="text-violet-400">
              💡 Always learning and exploring new technologies to stay ahead in the game
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

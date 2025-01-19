import { motion } from 'framer-motion'
import { Layout, Server, Workflow, Terminal } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "HTML", years: 3, image: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", years: 3, image: "https://skillicons.dev/icons?i=css" },
        { name: "React.js", years: 2, image: "https://skillicons.dev/icons?i=react" },
        { name: "TypeScript", years: 2, image: "https://skillicons.dev/icons?i=ts" },
        { name: "JavaScript", years: 3, image: "https://skillicons.dev/icons?i=js" },
        { name: "Redux", years: 2, image: "https://skillicons.dev/icons?i=redux" }
      ]
    },
    {
      name: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", years: 2, image: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express.js", years: 2, image: "https://skillicons.dev/icons?i=express" },
        { name: "MongoDB", years: 2, image: "https://skillicons.dev/icons?i=mongodb" },
        { name: "Firebase", years: 2, image: "https://skillicons.dev/icons?i=firebase" }
      ]
    },
    {
      name: "Development Tools",
      icon: <Workflow className="w-6 h-6" />,
      skills: [
        { name: "Git", years: 3, image: "https://skillicons.dev/icons?i=git" },
        { name: "VS Code", years: 3, image: "https://skillicons.dev/icons?i=vscode" },
        { name: "Docker", years: 1, image: "https://skillicons.dev/icons?i=docker" },
        { name: "AWS", years: 1, image: "https://skillicons.dev/icons?i=aws" }
      ]
    },
    {
      name: "System & Scripting",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: "Linux", years: 2, image: "https://skillicons.dev/icons?i=linux" },
        { name: "Bash", years: 2, image: "https://skillicons.dev/icons?i=bash" }
      ]
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-title",
          start: "top bottom-=100",
        }
      })

      // Animate skill categories
      skillCategories.forEach((_, categoryIndex) => {
        gsap.from(`.category-${categoryIndex}`, {
          x: categoryIndex % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `.category-${categoryIndex}`,
            start: "top bottom-=50",
          }
        })

        // Animate skill cards
        gsap.from(`.skill-card-${categoryIndex}`, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: `.category-${categoryIndex}`,
            start: "top bottom-=50",
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 section-title">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mastering the art of modern web development with cutting-edge technologies
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name} className={`category-${categoryIndex}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-violet-900/20 rounded-xl text-violet-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group skill-card-${categoryIndex}`}
                  >
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-violet-900/10 to-purple-900/10 border border-violet-500/20 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-1">
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/10 group-hover:to-purple-600/10 transition-all duration-500" />

                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-violet-900/20 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-10 h-10"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{skill.name}</h4>
                          <span className="text-sm text-gray-400">{skill.years} years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

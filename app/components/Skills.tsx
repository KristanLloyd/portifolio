"use client"

import { useState } from "react"

const skills = [
  {
    category: "Programming Languages",
    items: ["C#", "Java", "Python", "JavaScript"],
  },
  {
    category: "Framework",
    items: ["ReactNative","ReactJs"],
  },
  {
    category: "Database",
    items: ["MySQL","Firebase"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git","Vs Code", "Android Studio", "Arduino IDE"],
  },
  {
    category: "Certification",
    items: ["Google CyberSecurity(in progress)"],
  },
  {
    category: "Network and Hardware Troubleshooting Skills",
    items: ["Installation of PC or Laptop Components", "troubleshooting system errors or performance issues","Diagnosing and resolving network connectivity issues, including LAN and Wi-Fi troubleshooting"],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Technical Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === index ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 hover:bg-indigo-100"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {skill.category}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-600">{skills[activeCategory].category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills[activeCategory].items.map((item, index) => (
              <div key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


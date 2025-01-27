"use client"

import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Eco-Track Garbage Truck Tracking",
    description:
      "Innovative solution designed to transform waste management through real-time tracking. (ongoing Project no link provided)",
    image: "public/ecotrack.jpg",
    tags: ["ReactJS/Native", "JavaScript", "Firebase Database", "ESP32 & A7 GPS/GSM"],
    link: "#",
  },
  {
    title: "Web-Based Booking Management",
    description:
      "A web-based booking management system streamlines scheduling and reservations through an intuitive online Platform",
    image: "public/elbriza.PNG",
    tags: ["PHP", "MySQL", "JavaScript"],
    link: "https://bclma.io/elbriza/",
  },
  {
    title: "Reminder App",
    description:
      "A feature-rich Android application using Android Studio to improve task management and scheduling",
    image: "public/reminder.jpg",
    tags: ["Java", "MySQL", "XML"],
    link: "#",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Innovative Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover", opacity: hoveredIndex === index ? 0.3 : 1 }}
                  className="transition-opacity duration-300"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="text-gray-800 text-center">{project.description}</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
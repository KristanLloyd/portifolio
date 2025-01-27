import Link from "next/link"

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I am <span className="text-indigo-600">Kristan Lloyd Balanga</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8">
          {" "}
          I am an aspiring IT professional with a passion for software development, cybersecurity, and system and
          hawrdware troubleshooting. Through hands-on projects and a dedication to continuous learning, I strive to
          create impactful, secure, and innovative solutions that address real-world challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#projects"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-500 transition-colors"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  )
}


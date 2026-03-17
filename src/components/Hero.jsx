import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const elements = ref.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))
    return () => elements?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section
      id="domov"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://loremflickr.com/1200/800/dog,puppy?random=1"
          alt="Roztomilý pes v prírode"
          loading="eager"
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.onerror = null
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-900', 'to-purple-900')
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="fade-in">
          <span className="inline-block text-5xl mb-6">🐶</span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Objavuj svet psov s úsmevom
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Zaujímavé fakty, roztomilé obrázky a všetko, čo milovník psov potrebuje vedieť. Pridaj sa k našej komunite psích nadšencov!
          </p>
        </div>

        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#zaujimavosti"
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Preskúmať fakty
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Zapoj sa
          </a>
        </div>
      </div>
    </section>
  )
}

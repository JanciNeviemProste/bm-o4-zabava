import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const elements = ref.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))
    return () => elements?.forEach((el) => observer.unobserve(el))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" ref={ref} className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Napíš nám
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Máš zaujímavý fakt o psoch? Chceš sa s nami podeliť o príbeh svojho miláčika? Neváhaj a napíš nám!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in">
          {/* Form */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-5xl block mb-4">🐕</span>
                <h3 className="text-xl font-semibold text-white mb-2">Ďakujeme za správu!</h3>
                <p className="text-gray-400">Ozveme sa ti čo najskôr. Zatiaľ si pozri ďalšie zaujímavosti o psoch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Meno
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tvoje meno"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tvoj@email.sk"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Predmet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="O čom nám chceš napísať?"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Napíš nám svoju správu..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Kontaktné údaje</h3>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium text-white">Adresa</p>
                  <p className="text-gray-400">Psí park 42, 811 01 Bratislava</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium text-white">Telefón</p>
                  <p className="text-gray-400">+421 900 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400">ahoj@psiaplaneta.sk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-medium text-white">Otváracie hodiny</p>
                  <p className="text-gray-400">Po – Pi: 9:00 – 18:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-3">🐾 Zdieľaj s priateľmi</h3>
              <p className="text-gray-400 leading-relaxed">
                Poznáš niekoho, kto miluje psov rovnako ako ty? Zdieľaj túto stránku a rozšír našu komunitu psích nadšencov!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

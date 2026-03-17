import { useEffect, useRef } from 'react'

const FACTS = [
  {
    icon: '🐕',
    title: 'Výnimočný čuch',
    description:
      'Nos psa je jeho supersilou. Psy dokážu rozlíšiť až 300 miliónov rôznych vôní, zatiaľ čo človek len približne 6 miliónov. Niektoré plemená, ako napríklad bloodhound, dokážu sledovať stopu starú aj niekoľko dní. Práve preto sa psy využívajú pri záchranných akciách, hľadaní drog aj pri detekcii chorôb.',
  },
  {
    icon: '🧠',
    title: 'Inteligencia na úrovni dieťaťa',
    description:
      'Priemerný pes dokáže porozumieť približne 165 slovám a gestám, čo zodpovedá úrovni dvojročného dieťaťa. Border kólia menom Chaser sa naučila rozpoznať viac ako 1 000 slov. Psy tiež rozumejú ľudským emóciám a dokážu čítať výrazy tváre.',
  },
  {
    icon: '🌙',
    title: 'Sny ako u ľudí',
    description:
      'Psy snívajú rovnako ako ľudia. Počas REM fázy spánku môžeš vidieť, ako im škubú labky alebo ticho štekajú. Šteniatá a staršie psy snívajú častejšie ako dospelé psy. Vedci sa domnievajú, že psy snívajú o bežných denných aktivitách, ako sú prechádzky či hry.',
  },
  {
    icon: '🎵',
    title: 'Hudobný sluch',
    description:
      'Psy počujú zvuky v rozsahu 40 Hz až 65 000 Hz, zatiaľ čo ľudia počujú len do 20 000 Hz. Preto reagujú na zvuky, ktoré my ani nevnímame. Zaujímavé je, že psy majú hudobné preferencie — výskumy ukázali, že väčšina psov uprednostňuje reggae a soft rock.',
  },
  {
    icon: '🐾',
    title: 'Jedinečné odtlačky nosa',
    description:
      'Každý pes má úplne jedinečný odtlačok nosa, podobne ako ľudia majú odtlačky prstov. Žiadne dva psy na svete nemajú rovnaký vzor. V niektorých krajinách sa odtlačky nosa dokonca používajú na identifikáciu stratených psov.',
  },
  {
    icon: '💓',
    title: 'Srdce plné lásky',
    description:
      'Keď sa pes a jeho majiteľ na seba pozerajú, u oboch sa zvyšuje hladina oxytocínu — hormónu lásky. Tento rovnaký mechanizmus funguje medzi matkou a dieťaťom. Psy sú jediné zvieratá, ktoré dokážu nadviazať takýto hlboký emocionálny vzťah s človekom.',
  },
]

export default function Features() {
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
    <section id="zaujimavosti" ref={ref} className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fascinujúce fakty o psoch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Vedel si, že psy sú oveľa zaujímavejšie, než si myslíš? Pozri sa na tieto neuveriteľné fakty!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACTS.map((fact, index) => (
            <article
              key={index}
              className="fade-in bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:border-blue-500/30"
            >
              <span className="text-4xl block mb-4">{fact.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{fact.title}</h3>
              <p className="text-base text-gray-400 leading-relaxed">{fact.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'

const GALLERY_ITEMS = [
  { src: 'https://loremflickr.com/600/600/dog,golden-retriever?random=10', alt: 'Zlatý retriever na lúke' },
  { src: 'https://loremflickr.com/600/600/dog,husky?random=11', alt: 'Husky so žiarivými modrými očami' },
  { src: 'https://loremflickr.com/600/600/puppy,cute?random=12', alt: 'Roztomilé šteniatko na tráve' },
  { src: 'https://loremflickr.com/600/600/dog,labrador?random=13', alt: 'Labrador s loptičkou v papuli' },
  { src: 'https://loremflickr.com/600/600/dog,corgi?random=14', alt: 'Corgi s úsmevom na tvári' },
  { src: 'https://loremflickr.com/600/600/dog,beagle?random=15', alt: 'Bígl na prechádzke v parku' },
]

function handleImageError(e) {
  e.target.onerror = null
  e.target.style.display = 'none'
  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-600', 'to-purple-700')
  e.target.parentElement.innerHTML =
    '<span class="text-4xl flex items-center justify-center w-full h-full">📷</span>'
}

export default function Gallery() {
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
    <section id="galeria" ref={ref} className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Galéria roztomilých psov
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pretože žiadny deň nie je zlý, keď sa pozrieš na fotky psov. Vyber si svojho obľúbenca!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="fade-in aspect-square rounded-xl overflow-hidden relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <p className="text-white font-medium text-sm">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

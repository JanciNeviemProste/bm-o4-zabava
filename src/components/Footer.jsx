const FOOTER_LINKS = [
  { label: 'Domov', href: '#domov' },
  { label: 'Zaujímavosti', href: '#zaujimavosti' },
  { label: 'Galéria', href: '#galeria' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#domov" className="text-xl font-bold text-white hover:text-blue-400 transition-all duration-300">
              🐾 Psia Planéta
            </a>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Miesto pre všetkých, ktorí milujú psov. Zaujímavé fakty, krásne obrázky a komunita plná lásky k štvornohým priateľom.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigácia</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun fact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Vedel si, že...?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Najstarší známy pes sa dožil 29 rokov a 5 mesiacov. Bol to austrálsky ovčiak menom Bluey, ktorý žil v Austrálii od roku 1910 do roku 1939.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Psia Planéta. Všetky práva vyhradené. Vytvorené s ❤️ pre psích nadšencov.
          </p>
        </div>
      </div>
    </footer>
  )
}

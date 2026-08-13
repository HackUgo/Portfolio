const experience = [
  {
    role: 'Electrical Engineering Intern',
    company: 'Miller Electric Mfg. LLC',
    location: 'Appleton, WI',
    period: 'May 2025 – Aug 2025',
    bullets: [
      'Led redesign of welding machine output filter board after identifying thermal failure where resistors exceeded 180°C spec by 65°C',
      'Redesigned PCB layout in KiCad, upgraded to higher-wattage resistors, hand-soldered final board, and validated 40% temperature reduction (245°C → 150°C) through thermal testing',
      'Conducted quality analysis of 60 inductors using Bode 500 analyzer; performed statistical analysis and identified critical manufacturing outlier that prompted a process review',
      'Validated circuit designs through LTSpice simulations and oscilloscope analysis; participated in board design reviews and motor characterization testing',
    ],
  },
  {
    role: 'Product Design Instructor',
    company: 'ESD Girls in Engineering Academy, CMU',
    location: 'Mt Pleasant, MI',
    period: 'July 2026 – August 2026',
    bullets: [
      'Designed and delivered 3-week Arduino-based underwater ROV curriculum for high school students across 4 teams',
      'Covered embedded systems, sensor integration, and motor control',
      'Culminated in live ROV water deployment and sample collection at Beaver Island',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <p className="section-label">02 — Experience</p>
        <h2 className="section-heading">Where I've Worked</h2>

        <div className="mt-12 space-y-0">
          {experience.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              className="border-l border-white/10 py-6 pl-6 sm:pl-8"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold">
                  {item.role}{' '}
                  <span className="text-accent">@ {item.company}</span>
                </h3>
                <span className="font-mono text-xs text-white/40">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-white/40">
                {item.location}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2">
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

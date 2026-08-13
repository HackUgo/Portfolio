const leadership = [
  {
    title: 'Founder & President',
    org: 'Applied Robotics Engineering Club — CMU',
    period: 'May 2026 – Present',
    description:
      "Founded CMU's first dedicated robotics engineering club. Assembled 7-person founding board with two faculty advisors. Developing mechatronics and autonomous systems curriculum.",
  },
  {
    title: 'Project Management Chair',
    org: 'IEEE — CMU',
    period: 'Aug 2024 – May 2026',
    description:
      'Organize PCB design and embedded systems workshops. Oversee student project development across the chapter.',
  },
  {
    title: 'Treasurer',
    org: 'Drone Club — CMU',
    period: 'Aug 2025 – May 2026',
    description:
      'Lead collaborative drone design projects and manage club budget.',
  },
  {
    title: 'CSE Campus Ambassador',
    org: 'College of Science and Engineering — CMU',
    period: 'Aug 2025 – Present',
    description:
      'Lead technical facility tours for 100+ prospective students. Facilitate faculty-student engagement for the College of Science and Engineering.',
  },
  {
    title: 'Student Coordinator',
    org: 'Student Food Pantry — CMU',
    period: 'Jan 2024 – Present',
    description:
      'Coordinate weekly food distribution events serving 400+ students experiencing food insecurity. Manage volunteer scheduling, inventory, and partnerships with local organizations including Aldi.',
  },
]

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="section-container">
        <p className="section-label">03 — Leadership</p>
        <h2 className="section-heading">Leadership & Involvement</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {leadership.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`rounded-lg border border-white/10 bg-white/[0.02] p-6 ${
                index === leadership.length - 1 && leadership.length % 2 === 1
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="flex-shrink-0 font-mono text-xs text-white/40">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-accent">{item.org}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

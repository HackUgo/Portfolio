import { useEffect, useState } from 'react'

const cyclingTags = [
  'PCB Design',
  'Embedded Systems',
  'Robotics',
  'Computer Vision',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let fadeTimeout

    // Every 2s: fade current tag out, swap it, fade the next one in
    const interval = setInterval(() => {
      setVisible(false)
      fadeTimeout = setTimeout(() => {
        setIndex((i) => (i + 1) % cyclingTags.length)
        setVisible(true)
      }, 300)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(fadeTimeout)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Subtle accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="section-container">
        <p className="section-label">Electrical Engineering Student @ CMU</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Hi, I'm <span className="text-accent">Ugonna</span>.
          <br />
          I build hardware that actually works.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/60">
          EE student at Central Michigan University focused on robotics,
          embedded systems, and PCB design. I bridge the gap between circuit
          boards and autonomous systems.
        </p>

        {/* Cycling animated tag */}
        <div className="mt-8 flex items-center gap-3 font-mono text-sm">
          <span className="text-white/40">Focus:</span>
          <span
            className={`text-accent transition-opacity duration-300 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {cyclingTags[index]}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

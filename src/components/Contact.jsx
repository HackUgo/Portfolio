const socials = [
  { label: 'Email', href: 'mailto:emeka1uv@cmich.edu', external: false },
  { label: 'GitHub', href: 'https://github.com/HackUgo', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ugoemeka',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container text-center">
        <p className="section-label">04 — Contact</p>
        <h2 className="section-heading">Let's Build Something</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/60">
          Open to new grad roles in robotics, embedded systems, and PCB design —
          graduating May 2027. Whether you're a recruiter, researcher, or fellow
          builder, let's connect.
        </p>

        <a
          href="mailto:emeka1uv@cmich.edu"
          className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Say Hello
        </a>

        <ul className="mt-10 flex justify-center gap-8">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                {...(social.external
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="font-mono text-sm text-white/50 transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

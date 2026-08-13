export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-white/40">
          © {new Date().getFullYear()} Ugonna Emeka-Inegbu. All rights reserved.
        </p>
        <p className="font-mono text-xs text-white/40">
          Built with React <span className="text-accent">+</span> Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

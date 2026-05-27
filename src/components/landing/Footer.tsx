import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border-soft)]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo variant="light" size="sm" />
          <span className="text-sm text-[var(--color-text-dim)]">
            © {new Date().getFullYear()}
          </span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
          <a href="/terminos" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
        </nav>
      </div>
    </footer>
  )
}

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { theme, cn } from '../styles/theme';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={cn(theme.components.nav.container, 'relative z-50')}>
      <div className={theme.spacing.container}>
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn('text-2xl font-bold', theme.colors.text.primary)}
          >
            BuildNext
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={theme.components.nav.link}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu (slides down) */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          open ? 'max-h-64' : 'max-h-0'
        )}
      >
        <div className="bg-slate-900/95 backdrop-blur border-t border-slate-800">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  theme.components.nav.link,
                  'text-lg'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

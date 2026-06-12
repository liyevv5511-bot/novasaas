import { Link } from 'react-router-dom'
import { Sparkles, Star, ShieldCheck, Zap } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'
import { Moon, Sun } from 'lucide-react'

const perks = [
  { icon: Zap, text: 'Set up in under 5 minutes' },
  { icon: ShieldCheck, text: 'Bank-grade security & SOC 2' },
  { icon: Star, text: 'Loved by 4,000+ teams worldwide' },
]

export default function AuthLayout({ title, subtitle, children, footer }) {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex min-h-screen flex-col px-6 py-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            Nova<span className="text-gradient">SaaS</span>
          </Link>
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h1>
            <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
            <div className="mt-8">{children}</div>
            <p className="mt-8 text-center text-sm text-slate-500">{footer}</p>
          </div>
        </div>
      </div>

      {/* Right: brand panel */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-fuchsia-700 lg:block">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex h-full flex-col justify-center px-16 text-white">
          <blockquote className="text-2xl font-bold leading-snug">
            "NovaSaaS replaced three tools for us. Our team finally trusts the numbers."
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20 font-bold">SM</span>
            <div>
              <p className="font-semibold">Sara Mammadova</p>
              <p className="text-sm text-brand-100">Head of Growth, Lumen</p>
            </div>
          </div>
          <ul className="mt-12 space-y-4">
            {perks.map((p) => (
              <li key={p.text} className="flex items-center gap-3 text-brand-50">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">
                  <p.icon size={16} aria-hidden="true" />
                </span>
                {p.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

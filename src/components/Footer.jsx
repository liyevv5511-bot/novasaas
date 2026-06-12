import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react'

const columns = [
  { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'Help center', 'Community', 'API'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
                <Sparkles size={18} />
              </span>
              Nova<span className="text-gradient">SaaS</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Analytics that turn data into decisions, for teams that move fast.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-brand-600 hover:border-brand-300 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">© 2026 NovaSaaS Inc. All rights reserved.</p>
          <p className="text-sm text-slate-500">Built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}

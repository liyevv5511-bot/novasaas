import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Search, Bell, Sparkles, Moon, Sun, LogOut, Menu, X,
  Home, BarChart3, Wallet, Users, FileText, Settings as SettingsIcon,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import Overview from '../components/dashboard/Overview.jsx'
import Analytics from '../components/dashboard/Analytics.jsx'
import Revenue from '../components/dashboard/Revenue.jsx'
import Customers from '../components/dashboard/Customers.jsx'
import Reports from '../components/dashboard/Reports.jsx'
import Settings from '../components/dashboard/Settings.jsx'

const nav = [
  { id: 'overview', icon: Home, label: 'Overview' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'revenue', icon: Wallet, label: 'Revenue' },
  { id: 'customers', icon: Users, label: 'Customers' },
  { id: 'reports', icon: FileText, label: 'Reports' },
  { id: 'settings', icon: SettingsIcon, label: 'Settings' },
]

// which views use the topbar search
const searchable = { overview: true, customers: true }

export default function Dashboard() {
  const { theme, toggle } = useTheme()
  const [view, setView] = useState('overview')
  const [query, setQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const go = (id) => {
    setView(id)
    setQuery('')
    setSidebarOpen(false)
  }

  const renderView = () => {
    switch (view) {
      case 'analytics': return <Analytics />
      case 'revenue': return <Revenue />
      case 'customers': return <Customers query={query} />
      case 'reports': return <Reports />
      case 'settings': return <Settings />
      default: return <Overview query={query} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <a href="#dashboard-main" className="skip-link">Skip to main content</a>
      {/* Sidebar */}
      <aside
        aria-label="Dashboard navigation"
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-transform lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 font-extrabold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
              <Sparkles size={16} />
            </span>
            Nova<span className="text-gradient">SaaS</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close navigation" className="lg:hidden text-slate-500">
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Dashboard sections" className="px-3 py-4">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              aria-current={view === n.id ? 'page' : undefined}
              className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                view === n.id
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-600/15 dark:text-brand-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <n.icon size={18} aria-hidden="true" />
              {n.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 p-3">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-bold text-white">
              AL
            </span>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-semibold">Ali Liyev</p>
              <p className="truncate text-xs text-slate-500">Admin</p>
            </div>
            <Link to="/" className="text-slate-400 hover:text-rose-500 transition-colors"><LogOut size={16} /></Link>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-5 backdrop-blur-xl">
          <button onClick={() => setSidebarOpen(true)} aria-label="Open navigation" className="lg:hidden text-slate-500">
            <Menu size={22} aria-hidden="true" />
          </button>
          <div className="relative flex-1 max-w-md">
            <label htmlFor="dashboard-search" className="sr-only">Search</label>
            <Search size={16} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="dashboard-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={!searchable[view]}
              placeholder={searchable[view] ? 'Search…' : 'Search not available here'}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 disabled:opacity-50"
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <button
              aria-label="Notifications (1 unread)"
              className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Bell size={18} aria-hidden="true" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500" />
            </button>
          </div>
        </header>

        <main id="dashboard-main" className="p-5 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

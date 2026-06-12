import { useState } from 'react'
import { User, Bell, Palette, Shield, Check } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'
import { PageHeader, Card } from './shared.jsx'

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 rounded-full transition-colors ${
        checked ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-700'
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
    </label>
  )
}

export default function Settings() {
  const { theme, toggle } = useTheme()
  const [notif, setNotif] = useState({ product: true, weekly: true, security: true, marketing: false })
  const [saved, setSaved] = useState(false)

  const save = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <PageHeader title="Settings" subtitle="Manage your profile, preferences and security." />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile */}
        <Card title="Profile" subtitle="Your personal information" className="lg:col-span-2 p-6" delay={0.1}>
          <div className="mb-6 flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-xl font-bold text-white">
              AL
            </span>
            <div>
              <button className="btn-ghost py-2 text-xs">Change photo</button>
              <p className="mt-1.5 text-xs text-slate-500">JPG or PNG. Max 2MB.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" defaultValue="Ali Liyev" />
            <Field label="Email" type="email" defaultValue="ali@novasaas.io" />
            <Field label="Company" defaultValue="NovaSaaS Inc." />
            <Field label="Role" defaultValue="Administrator" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button onClick={save} className="btn-primary py-2.5">
              {saved ? <><Check size={16} /> Saved!</> : 'Save changes'}
            </button>
            <button className="btn-ghost py-2.5">Cancel</button>
          </div>
        </Card>

        {/* Appearance */}
        <Card title="Appearance" subtitle="Customize the look" className="p-6" delay={0.2}>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 dark:bg-brand-600/10 text-brand-600 dark:text-brand-400">
              <Palette size={18} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">Theme</p>
              <p className="text-xs text-slate-500">Currently: {theme === 'dark' ? 'Dark' : 'Light'}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={() => theme === 'dark' && toggle()}
              className={`rounded-xl border-2 p-3 text-sm font-semibold transition-colors ${
                theme === 'light' ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              ☀️ Light
            </button>
            <button
              onClick={() => theme === 'light' && toggle()}
              className={`rounded-xl border-2 p-3 text-sm font-semibold transition-colors ${
                theme === 'dark' ? 'border-brand-500 bg-brand-600/15 text-brand-400' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              🌙 Dark
            </button>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Notifications */}
        <Card title="Notifications" subtitle="Choose what you hear about" className="p-6" delay={0.3}>
          <div className="space-y-1">
            {[
              { key: 'product', icon: Bell, label: 'Product updates', desc: 'New features and improvements' },
              { key: 'weekly', icon: Bell, label: 'Weekly digest', desc: 'A summary every Monday' },
              { key: 'security', icon: Shield, label: 'Security alerts', desc: 'Sign-ins and password changes' },
              { key: 'marketing', icon: Bell, label: 'Marketing emails', desc: 'Tips, offers and news' },
            ].map((n) => (
              <div key={n.key} className="flex items-center justify-between rounded-xl px-2 py-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                    <n.icon size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{n.label}</p>
                    <p className="text-xs text-slate-500">{n.desc}</p>
                  </div>
                </div>
                <Toggle label={n.label} checked={notif[n.key]} onChange={(v) => setNotif((s) => ({ ...s, [n.key]: v }))} />
              </div>
            ))}
          </div>
        </Card>

        {/* Security */}
        <Card title="Security" subtitle="Keep your account safe" className="p-6" delay={0.4}>
          <div className="space-y-4">
            <Field label="Current password" type="password" placeholder="••••••••" />
            <Field label="New password" type="password" placeholder="••••••••" />
            <div className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
              <div>
                <p className="text-sm font-medium">Two-factor authentication</p>
                <p className="text-xs text-slate-500">Add an extra layer of security</p>
              </div>
              <Toggle label="Two-factor authentication" checked={true} onChange={() => {}} />
            </div>
            <button className="btn-primary w-full py-2.5">Update password</button>
          </div>
        </Card>
      </div>
    </div>
  )
}

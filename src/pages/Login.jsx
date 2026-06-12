import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout.jsx'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.email) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'At least 6 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => navigate('/dashboard'), 900) // mock auth
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to your NovaSaaS account."
      footer={<>Don't have an account? <Link to="/signup" className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">Sign up free</Link></>}
    >
      <form onSubmit={submit} noValidate className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <div className="relative">
            <Mail size={16} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="email" type="email" autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-err' : undefined}
              placeholder="you@company.com"
              className={`w-full rounded-xl border bg-slate-50 dark:bg-slate-950 py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 ${
                errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-brand-500'
              }`}
            />
          </div>
          {errors.email && <p id="email-err" className="mt-1.5 text-xs text-rose-500">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <button type="button" className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline">Forgot?</button>
          </div>
          <div className="relative">
            <Lock size={16} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="password" type={showPw ? 'text' : 'password'} autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'pw-err' : undefined}
              placeholder="••••••••"
              className={`w-full rounded-xl border bg-slate-50 dark:bg-slate-950 py-2.5 pl-9 pr-10 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 ${
                errors.password ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-brand-500'
              }`}
            />
            <button
              type="button" onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && <p id="pw-err" className="mt-1.5 text-xs text-rose-500">{errors.password}</p>}
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
          {loading ? <><Loader2 size={16} className="animate-spin" /> Logging in…</> : 'Log in'}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" /> OR <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <button onClick={() => navigate('/dashboard')} className="btn-ghost w-full">
        <span className="font-bold text-base">G</span> Continue with Google
      </button>
    </AuthLayout>
  )
}

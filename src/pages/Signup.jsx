import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Lock, Eye, EyeOff, Loader2, Check } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout.jsx'

function strength(pw) {
  let s = 0
  if (pw.length >= 6) s++
  if (pw.length >= 10) s++
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++
  if (/\d/.test(pw) || /[^A-Za-z0-9]/.test(pw)) s++
  return s // 0..4
}
const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong']
const strengthColors = ['', 'bg-rose-500', 'bg-amber-500', 'bg-yellow-500', 'bg-emerald-500']

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', agree: false })
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const s = strength(form.password)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'At least 6 characters'
    if (!form.agree) e.agree = 'You must accept the terms'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => navigate('/dashboard'), 900) // mock signup
  }

  const field = (id, label, icon, type, placeholder, autoComplete) => {
    const Icon = icon
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
        <div className="relative">
          <Icon size={16} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id={id} type={type} autoComplete={autoComplete}
            value={form[id]}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
            aria-invalid={!!errors[id]}
            aria-describedby={errors[id] ? `${id}-err` : undefined}
            placeholder={placeholder}
            className={`w-full rounded-xl border bg-slate-50 dark:bg-slate-950 py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 ${
              errors[id] ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-brand-500'
            }`}
          />
        </div>
        {errors[id] && <p id={`${id}-err`} className="mt-1.5 text-xs text-rose-500">{errors[id]}</p>}
      </div>
    )
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your free 14-day trial. No credit card required."
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">Log in</Link></>}
    >
      <form onSubmit={submit} noValidate className="space-y-4">
        {field('name', 'Full name', User, 'text', 'Ali Liyev', 'name')}
        {field('email', 'Email', Mail, 'email', 'you@company.com', 'email')}

        {/* Password with strength */}
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
          <div className="relative">
            <Lock size={16} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="password" type={showPw ? 'text' : 'password'} autoComplete="new-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'pw-err' : undefined}
              placeholder="Create a password"
              className={`w-full rounded-xl border bg-slate-50 dark:bg-slate-950 py-2.5 pl-9 pr-10 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 ${
                errors.password ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-brand-500'
              }`}
            />
            <button
              type="button" onClick={() => setShowPw((p) => !p)}
              aria-label={showPw ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {form.password && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex flex-1 gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= s ? strengthColors[s] : 'bg-slate-200 dark:bg-slate-800'}`} />
                ))}
              </div>
              <span className="text-xs text-slate-500">{strengthLabels[s]}</span>
            </div>
          )}
          {errors.password && <p id="pw-err" className="mt-1.5 text-xs text-rose-500">{errors.password}</p>}
        </div>

        {/* Terms */}
        <div>
          <label className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
            <button
              type="button" role="checkbox" aria-checked={form.agree}
              onClick={() => setForm({ ...form, agree: !form.agree })}
              className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-md border transition-colors ${
                form.agree ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 dark:border-slate-700'
              }`}
            >
              {form.agree && <Check size={13} strokeWidth={3} />}
            </button>
            <span>I agree to the <a href="#" className="font-medium text-brand-600 dark:text-brand-400 hover:underline">Terms</a> and <a href="#" className="font-medium text-brand-600 dark:text-brand-400 hover:underline">Privacy Policy</a>.</span>
          </label>
          {errors.agree && <p className="mt-1.5 text-xs text-rose-500">{errors.agree}</p>}
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
          {loading ? <><Loader2 size={16} className="animate-spin" /> Creating account…</> : 'Create free account'}
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

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'

export function useAxisColor() {
  const { theme } = useTheme()
  return theme === 'dark' ? '#475569' : '#94a3b8'
}

export function ChartTooltip({ active, payload, label, prefix = '', suffix = '' }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs shadow-lg">
      {label && <p className="mb-1 font-semibold">{label}</p>}
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color || p.fill }}>
          {p.name}: {prefix}
          {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
          {suffix}
        </p>
      ))}
    </div>
  )
}

import { useState } from 'react'

export function PeriodSelector({ options = ['7d', '30d', '12m'], defaultValue }) {
  const [active, setActive] = useState(defaultValue || options[options.length - 1])
  return (
    <div className="inline-flex gap-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => setActive(o)}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
            active === o
              ? 'bg-brand-600 text-white'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

export function PageHeader({ title, subtitle, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

// Lightweight inline SVG sparkline — no chart lib overhead for tiny cards
export function Sparkline({ data = [], up = true, width = 90, height = 32 }) {
  if (!data.length) return null
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const stepX = width / (data.length - 1)
  const points = data.map((v, i) => [i * stepX, height - ((v - min) / range) * (height - 4) - 2])
  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `${line} L${width},${height} L0,${height} Z`
  const stroke = up ? '#10b981' : '#f43f5e'
  const id = `spark-${Math.round(points[0][1] * data.length)}-${data.length}`
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StatCard({ icon: Icon, label, value, change, up, spark, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-shadow hover:shadow-lg hover:shadow-brand-600/5"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 dark:bg-brand-600/10 text-brand-600 dark:text-brand-400">
          <Icon size={18} />
        </span>
        {change && (
          <span
            className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
              up ? 'text-emerald-500' : 'text-rose-500'
            }`}
          >
            {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {change}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-end justify-between gap-2">
        <div>
          <p className="text-2xl font-extrabold">{value}</p>
          <p className="text-sm text-slate-500">{label}</p>
        </div>
        {spark && <Sparkline data={spark} up={up} />}
      </div>
    </motion.div>
  )
}

export function Card({ title, subtitle, action, className = '', children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${className}`}
    >
      {(title || action) && (
        <div className="flex items-center justify-between p-6 pb-4">
          <div>
            {title && <h3 className="font-bold">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </motion.section>
  )
}

const badgeStyles = {
  green: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400',
  slate: 'bg-slate-100 text-slate-600 dark:bg-slate-700/40 dark:text-slate-300',
  brand: 'bg-brand-50 text-brand-700 dark:bg-brand-600/15 dark:text-brand-400',
}

export function Badge({ tone = 'slate', children }) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyles[tone]}`}>
      {children}
    </span>
  )
}

export const statusTone = {
  Paid: 'green', Succeeded: 'green', Active: 'green',
  Pending: 'amber', Trial: 'blue',
  Failed: 'rose', Churned: 'rose',
}

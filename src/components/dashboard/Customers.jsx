import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, UserPlus, UserCheck, UserX, Mail } from 'lucide-react'
import { customers } from '../../data/dashboardData.js'
import { PageHeader, StatCard, Card, Badge, statusTone } from './shared.jsx'

const stats = [
  { label: 'Total customers', value: '2,340', change: '+8.2%', up: true, icon: Users, spark: [1800, 1920, 2050, 2110, 2240, 2340] },
  { label: 'New this month', value: '184', change: '+12.0%', up: true, icon: UserPlus, spark: [120, 138, 145, 162, 170, 184] },
  { label: 'Active', value: '1,980', change: '+5.1%', up: true, icon: UserCheck, spark: [1620, 1700, 1780, 1840, 1910, 1980] },
  { label: 'Churned', value: '42', change: '−3.4%', up: false, icon: UserX, spark: [58, 54, 50, 47, 45, 42] },
]

const filters = ['All', 'Active', 'Trial', 'Churned']

export default function Customers({ query }) {
  const [filter, setFilter] = useState('All')

  const list = customers.filter((c) => {
    const matchesQuery =
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.email.toLowerCase().includes(query.toLowerCase()) ||
      c.company.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'All' || c.status === filter
    return matchesQuery && matchesFilter
  })

  return (
    <div>
      <PageHeader
        title="Customers"
        subtitle="Manage and segment your customer base."
        action={<button className="btn-primary py-2.5"><UserPlus size={16} /> Add customer</button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.08} />)}
      </div>

      <Card className="mt-6 overflow-hidden" delay={0.3}
        title="All customers"
        subtitle={`${list.length} shown`}
        action={
          <div className="flex gap-1 rounded-xl border border-slate-200 dark:border-slate-800 p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filter === f
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-y border-slate-200 dark:border-slate-800 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Company</th>
                <th className="px-6 py-3 font-medium">Plan</th>
                <th className="px-6 py-3 font-medium">Total spent</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {list.map((c) => (
                <motion.tr
                  key={c.email}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-slate-100 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <span className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${c.color} text-xs font-bold text-white`}>
                        {c.initials}
                      </span>
                      <div>
                        <p className="font-semibold">{c.name}</p>
                        <p className="text-xs text-slate-500">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-slate-600 dark:text-slate-400">{c.company}</td>
                  <td className="px-6 py-3"><Badge tone="brand">{c.plan}</Badge></td>
                  <td className="px-6 py-3 font-semibold">{c.spent}</td>
                  <td className="px-6 py-3"><Badge tone={statusTone[c.status]}>{c.status}</Badge></td>
                  <td className="px-6 py-3">
                    <button className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600">
                      <Mail size={15} />
                    </button>
                  </td>
                </motion.tr>
              ))}
              {list.length === 0 && (
                <tr><td colSpan={6} className="px-6 py-10 text-center text-slate-500">No customers match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { TrendingUp, Users, CreditCard, Activity } from 'lucide-react'
import { revenueData, trafficData, orders } from '../../data/dashboardData.js'
import { PageHeader, StatCard, Card, Badge, ChartTooltip, useAxisColor, statusTone, PeriodSelector } from './shared.jsx'

const stats = [
  { label: 'Total revenue', value: '$104,250', change: '+18.2%', up: true, icon: TrendingUp, spark: [32, 41, 38, 52, 49, 64, 71, 84, 104] },
  { label: 'Active users', value: '14,120', change: '+9.4%', up: true, icon: Users, spark: [42, 48, 51, 63, 69, 81, 98, 124, 141] },
  { label: 'Subscriptions', value: '2,340', change: '+4.1%', up: true, icon: CreditCard, spark: [180, 192, 205, 211, 224, 233, 240, 234, 234] },
  { label: 'Churn rate', value: '1.8%', change: '−0.6%', up: false, icon: Activity, spark: [3.1, 2.9, 2.8, 2.6, 2.4, 2.2, 2.0, 1.9, 1.8] },
]

export default function Overview({ query }) {
  const axis = useAxisColor()
  const filtered = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(query.toLowerCase()) ||
      o.email.toLowerCase().includes(query.toLowerCase()) ||
      o.id.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <PageHeader
        title="Overview"
        subtitle="Welcome back, Ali — here's what's happening today."
        action={<PeriodSelector />}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.08} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card title="Revenue growth" subtitle="Last 12 months" delay={0.3}
          className="lg:col-span-2 p-6"
          action={<Badge tone="green">+18.2%</Badge>}>
          <div role="img" aria-label="Area chart showing revenue growing from $32k in January to $104k in December, up 18.2% over the last 12 months.">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={axis} opacity={0.2} vertical={false} />
              <XAxis dataKey="month" stroke={axis} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={axis} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip content={<ChartTooltip prefix="$" />} />
              <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} fill="url(#rev)" />
            </AreaChart>
          </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Traffic sources" subtitle="Where users come from" className="p-6" delay={0.4}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={trafficData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {trafficData.map((d) => <Cell key={d.name} fill={d.color} stroke="none" />)}
              </Pie>
              <Tooltip content={<ChartTooltip suffix="%" />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2">
            {trafficData.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />
                  {d.name}
                </span>
                <span className="font-semibold">{d.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card title="New users" subtitle="Monthly signups" className="p-6" delay={0.5}>
          <div role="img" aria-label="Bar chart of monthly new-user signups, rising from 4,200 in January to 14,100 in December.">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke={axis} opacity={0.2} vertical={false} />
              <XAxis dataKey="month" stroke={axis} fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke={axis} fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(99,102,241,0.08)' }} />
              <Bar dataKey="users" fill="#a855f7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Recent orders" subtitle={`${filtered.length} of ${orders.length} shown`} delay={0.55}
          className="lg:col-span-2 overflow-hidden"
          action={<button className="text-sm font-semibold text-brand-600 dark:text-brand-400">View all</button>}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-y border-slate-200 dark:border-slate-800 text-left text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Plan</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((o) => (
                  <tr key={o.id} className="border-b border-slate-100 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-3">
                      <p className="font-semibold">{o.customer}</p>
                      <p className="text-xs text-slate-500">{o.email}</p>
                    </td>
                    <td className="px-6 py-3 text-slate-600 dark:text-slate-400">{o.plan}</td>
                    <td className="px-6 py-3 font-semibold">{o.amount}</td>
                    <td className="px-6 py-3"><Badge tone={statusTone[o.status]}>{o.status}</Badge></td>
                    <td className="px-6 py-3 text-slate-500">{o.date}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={5} className="px-6 py-10 text-center text-slate-500">No results for "{query}"</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}

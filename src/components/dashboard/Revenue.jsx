import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { DollarSign, Repeat, Receipt, TrendingDown } from 'lucide-react'
import { mrrData, planRevenue, transactions } from '../../data/dashboardData.js'
import { PageHeader, StatCard, Card, Badge, ChartTooltip, useAxisColor, statusTone } from './shared.jsx'

const stats = [
  { label: 'MRR', value: '$67,000', change: '+15.5%', up: true, icon: Repeat, spark: [38, 41, 46, 52, 58, 67] },
  { label: 'Total revenue', value: '$842,300', change: '+22.1%', up: true, icon: DollarSign, spark: [540, 590, 620, 690, 760, 842] },
  { label: 'Avg. order value', value: '$268', change: '+3.4%', up: true, icon: Receipt, spark: [240, 248, 252, 259, 264, 268] },
  { label: 'Refunds', value: '$4,120', change: '−1.2%', up: false, icon: TrendingDown, spark: [5.2, 4.9, 4.7, 4.5, 4.3, 4.1] },
]

export default function Revenue() {
  const axis = useAxisColor()
  return (
    <div>
      <PageHeader
        title="Revenue"
        subtitle="Track recurring revenue, transactions and plan performance."
        action={<button className="btn-primary py-2.5">Export CSV</button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.08} />)}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card title="Monthly recurring revenue" subtitle="Last 6 months" className="lg:col-span-2 p-6" delay={0.3}
          action={<Badge tone="green">+15.5%</Badge>}>
          <div role="img" aria-label="Bar chart of monthly recurring revenue rising from $38k in July to $67k in December, up 15.5%.">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={mrrData}>
              <CartesianGrid strokeDasharray="3 3" stroke={axis} opacity={0.2} vertical={false} />
              <XAxis dataKey="month" stroke={axis} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={axis} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip content={<ChartTooltip prefix="$" />} cursor={{ fill: 'rgba(99,102,241,0.08)' }} />
              <Bar dataKey="mrr" radius={[6, 6, 0, 0]} fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Revenue by plan" subtitle="Share of total" className="p-6" delay={0.4}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={planRevenue} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {planRevenue.map((d) => <Cell key={d.name} fill={d.color} stroke="none" />)}
              </Pie>
              <Tooltip content={<ChartTooltip suffix="%" />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2">
            {planRevenue.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />{d.name}
                </span>
                <span className="font-semibold">{d.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Recent transactions" subtitle="Latest payments processed" className="mt-6 overflow-hidden" delay={0.5}
        action={<button className="text-sm font-semibold text-brand-600 dark:text-brand-400">View all</button>}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-y border-slate-200 dark:border-slate-800 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-3 font-medium">Transaction</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Method</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-slate-100 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">{t.id}</td>
                  <td className="px-6 py-3 font-semibold">{t.customer}</td>
                  <td className="px-6 py-3 text-slate-600 dark:text-slate-400">{t.method}</td>
                  <td className="px-6 py-3 font-semibold">{t.amount}</td>
                  <td className="px-6 py-3"><Badge tone={statusTone[t.status]}>{t.status}</Badge></td>
                  <td className="px-6 py-3 text-slate-500">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

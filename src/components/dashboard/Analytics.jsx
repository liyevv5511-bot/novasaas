import {
  LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { MousePointerClick, Eye, Timer, LogOut, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { trafficTrend, devices, topPages, funnel } from '../../data/dashboardData.js'
import { PageHeader, StatCard, Card, ChartTooltip, useAxisColor, PeriodSelector } from './shared.jsx'

const stats = [
  { label: 'Sessions', value: '31,500', change: '+14.2%', up: true, icon: MousePointerClick, spark: [32, 41, 38, 52, 61, 48, 43, 55, 63] },
  { label: 'Page views', value: '79,500', change: '+11.8%', up: true, icon: Eye, spark: [84, 102, 96, 131, 158, 119, 105, 138, 159] },
  { label: 'Avg. session', value: '3m 42s', change: '+6.1%', up: true, icon: Timer, spark: [180, 195, 188, 210, 205, 222, 218, 225, 222] },
  { label: 'Bounce rate', value: '38.4%', change: '−2.3%', up: false, icon: LogOut, spark: [44, 43, 42, 41, 40, 39.5, 39, 38.6, 38.4] },
]

export default function Analytics() {
  const axis = useAxisColor()
  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Audience behaviour and engagement insights."
        action={<PeriodSelector options={['24h', '7d', '30d']} />}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.08} />)}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card title="Sessions vs page views" subtitle="This week" className="lg:col-span-2 p-6" delay={0.3}>
          <div role="img" aria-label="Line chart comparing weekly sessions and page views, both peaking on Friday at about 6,100 sessions and 15,800 page views.">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trafficTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke={axis} opacity={0.2} vertical={false} />
              <XAxis dataKey="day" stroke={axis} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke={axis} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="sessions" stroke="#6366f1" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="pageviews" stroke="#ec4899" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Devices" subtitle="Sessions by device" className="p-6" delay={0.4}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={devices} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {devices.map((d) => <Cell key={d.name} fill={d.color} stroke="none" />)}
              </Pie>
              <Tooltip content={<ChartTooltip suffix="%" />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2">
            {devices.map((d) => (
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

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Top pages" subtitle="Most viewed this month" className="overflow-hidden" delay={0.5}>
          <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {topPages.map((p) => (
              <div key={p.path} className="flex items-center justify-between px-6 py-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <span className="font-mono text-sm text-slate-700 dark:text-slate-300">{p.path}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold">{p.views.toLocaleString()}</span>
                  <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${p.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {p.up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}{p.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Conversion funnel" subtitle="Visitor → paying customer" className="p-6" delay={0.55}>
          <div className="space-y-4 pt-2">
            {funnel.map((f, i) => (
              <div key={f.stage}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium">{f.stage}</span>
                  <span className="text-slate-500">{f.value}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 transition-all"
                    style={{ width: `${f.value}%`, opacity: 1 - i * 0.12 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-brand-50 dark:bg-brand-600/10 px-4 py-3 text-sm text-brand-700 dark:text-brand-300">
            <strong>11%</strong> of visitors become paying customers — above the 8% industry average.
          </p>
        </Card>
      </div>
    </div>
  )
}

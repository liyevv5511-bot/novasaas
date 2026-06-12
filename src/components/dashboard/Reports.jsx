import { motion } from 'framer-motion'
import { FileText, Download, Plus, Clock } from 'lucide-react'
import { reports } from '../../data/dashboardData.js'
import { PageHeader, Card, Badge } from './shared.jsx'

const typeTone = {
  Finance: 'green', Growth: 'brand', Marketing: 'amber',
  Retention: 'rose', Product: 'blue', Support: 'slate',
}

export default function Reports() {
  return (
    <div>
      <PageHeader
        title="Reports"
        subtitle="Generate, browse and download your business reports."
        action={<button className="btn-primary py-2.5"><Plus size={16} /> New report</button>}
      />

      {/* Quick generate */}
      <Card className="p-6 mb-6 bg-gradient-to-br from-brand-600 to-fuchsia-700 border-0">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-white">Schedule automatic reports</h3>
            <p className="mt-1 text-sm text-brand-100">
              Get key metrics delivered to your inbox every Monday morning.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-transform hover:scale-105 active:scale-95">
            <Clock size={16} /> Set up schedule
          </button>
        </div>
      </Card>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-shadow hover:shadow-xl hover:shadow-brand-600/5"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 dark:bg-brand-600/10 text-brand-600 dark:text-brand-400">
                <FileText size={20} />
              </span>
              <Badge tone={typeTone[r.type]}>{r.type}</Badge>
            </div>
            <h3 className="mt-4 font-bold">{r.name}</h3>
            <p className="mt-1 flex-1 text-sm text-slate-600 dark:text-slate-400">{r.desc}</p>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
              <div className="text-xs text-slate-500">
                <p>Updated {r.updated}</p>
                <p>{r.size}</p>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors group-hover:border-brand-400 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                <Download size={14} /> Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

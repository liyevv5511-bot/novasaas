import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, TrendingUp, Users, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

const logos = ['Vercel', 'Linear', 'Notion', 'Stripe', 'Figma']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />

      <div className="container-x text-center">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          animate="show"
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 backdrop-blur"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          New: AI-powered insights are live
          <ArrowRight size={12} />
        </motion.a>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
        >
          Analytics that actually
          <br />
          <span className="text-gradient">grow your business</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
        >
          NovaSaaS turns raw data into clear decisions. Track revenue, users, and
          growth in real time — with a dashboard your whole team will love.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link to="/signup" className="btn-primary w-full sm:w-auto">
            Start free trial <ArrowRight size={16} />
          </Link>
          <Link to="/dashboard" className="btn-ghost w-full sm:w-auto">
            <Play size={16} /> Watch demo
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span>Loved by 4,000+ teams worldwide</span>
        </motion.div>

        {/* Hero dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-2xl shadow-brand-600/10">
            <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-5 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: TrendingUp, label: 'Revenue', value: '$84.2k', up: '+12.4%' },
                  { icon: Users, label: 'Active users', value: '12,940', up: '+8.1%' },
                  { icon: Zap, label: 'Conversion', value: '4.7%', up: '+1.2%' },
                  { icon: Star, label: 'NPS score', value: '72', up: '+5' },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-left"
                  >
                    <s.icon size={18} className="text-brand-500" />
                    <p className="mt-3 text-xs text-slate-500">{s.label}</p>
                    <p className="text-xl font-bold">{s.value}</p>
                    <p className="text-xs font-semibold text-emerald-500">{s.up}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex items-end gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 h-40">
                {[40, 65, 45, 80, 55, 90, 70, 100, 75, 95, 60, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* logos */}
        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Trusted by fast-growing companies
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-bold text-slate-400 dark:text-slate-600">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

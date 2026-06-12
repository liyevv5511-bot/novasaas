import { motion } from 'framer-motion'
import { BarChart3, ShieldCheck, Zap, Globe, Bell, Layers } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    desc: 'Watch your metrics update live. No more waiting for nightly reports — decisions happen now.',
  },
  {
    icon: Zap,
    title: 'Lightning fast',
    desc: 'Sub-second load times powered by an edge-first architecture. Your team never waits.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise security',
    desc: 'SOC 2 Type II, end-to-end encryption, and granular role-based access control built in.',
  },
  {
    icon: Globe,
    title: 'Works everywhere',
    desc: 'Fully responsive and accessible. Looks great on a phone, a tablet, or a boardroom screen.',
  },
  {
    icon: Bell,
    title: 'Smart alerts',
    desc: 'Get notified the moment a metric spikes or drops. Set thresholds in a single click.',
  },
  {
    icon: Layers,
    title: 'Unlimited integrations',
    desc: 'Connect Stripe, HubSpot, Google Analytics and 100+ tools in just a few minutes.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
            Everything you need
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            One platform, every metric that matters
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Stop juggling spreadsheets and disconnected tools. NovaSaaS brings your
            entire growth story into a single, beautiful place.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-7 transition-shadow hover:shadow-xl hover:shadow-brand-600/5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 dark:bg-brand-600/10 text-brand-600 dark:text-brand-400 transition-transform group-hover:scale-110">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

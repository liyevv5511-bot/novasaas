import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    desc: 'For individuals exploring the basics.',
    features: ['1 dashboard', 'Up to 1k events / mo', 'Community support', '7-day data history'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Pro',
    monthly: 29,
    yearly: 290,
    desc: 'For growing teams who need more power.',
    features: [
      'Unlimited dashboards',
      'Up to 500k events / mo',
      'Priority support',
      '1-year data history',
      'Smart alerts',
      'API access',
    ],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthly: 99,
    yearly: 990,
    desc: 'For organizations at scale.',
    features: [
      'Everything in Pro',
      'Unlimited events',
      'Dedicated manager',
      'SSO & SAML',
      'Custom SLA',
      'On-premise option',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">Pricing</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                !yearly ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                yearly ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-emerald-500">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl border p-8 ${
                p.highlight
                  ? 'border-brand-500 bg-white dark:bg-slate-900 shadow-2xl shadow-brand-600/15 lg:scale-105'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-extrabold">
                  ${yearly ? p.yearly : p.monthly}
                </span>
                <span className="mb-1 text-sm text-slate-500">
                  /{yearly ? 'year' : 'month'}
                </span>
              </div>
              <Link
                to="/signup"
                className={`mt-6 w-full ${p.highlight ? 'btn-primary' : 'btn-ghost'}`}
              >
                {p.cta}
              </Link>
              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 dark:bg-brand-600/10 text-brand-600 dark:text-brand-400">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

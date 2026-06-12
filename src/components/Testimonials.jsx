import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'NovaSaaS replaced three separate tools for us. Our team finally looks at the same numbers — and they actually trust them.',
    name: 'Sara Mammadova',
    role: 'Head of Growth, Lumen',
    initials: 'SM',
  },
  {
    quote:
      'We caught a churn spike within minutes thanks to smart alerts. It paid for itself in the first week.',
    name: 'David Chen',
    role: 'Founder, Shiplane',
    initials: 'DC',
  },
  {
    quote:
      'The cleanest analytics UI I have used. Onboarding the whole company took less than a day.',
    name: 'Aytac Rzayeva',
    role: 'COO, Brightpay',
    initials: 'AR',
  },
  {
    quote:
      'Setup took ten minutes and the dashboards just made sense. Our investors love the live reports.',
    name: 'Marcus Hill',
    role: 'CEO, Nexora',
    initials: 'MH',
  },
  {
    quote:
      'Support is unreal. Real engineers answered within minutes and helped us wire up our data.',
    name: 'Leyla Quliyeva',
    role: 'Data Lead, Orbit',
    initials: 'LQ',
  },
  {
    quote:
      'Switching to NovaSaaS cut our reporting time by 80%. I get my mornings back.',
    name: 'Tom Becker',
    role: 'PM, Flowstate',
    initials: 'TB',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 overflow-hidden">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Loved by teams of every size
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Don't just take our word for it — here's what our customers say.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="break-inside-avoid rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-7"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

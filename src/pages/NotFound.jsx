import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />

      <Link to="/" className="absolute left-6 top-6 flex items-center gap-2 font-extrabold">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
          <Sparkles size={18} aria-hidden="true" />
        </span>
        Nova<span className="text-gradient">SaaS</span>
      </Link>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-extrabold tracking-tight sm:text-9xl"
      >
        <span className="text-gradient">404</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <h2 className="mt-4 text-2xl font-bold">This page took a wrong turn</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">
          The page you're looking for doesn't exist or has been moved. Let's get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary w-full sm:w-auto">
            <Home size={16} /> Back to home
          </Link>
          <Link to="/dashboard" className="btn-ghost w-full sm:w-auto">
            <ArrowLeft size={16} /> Go to dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

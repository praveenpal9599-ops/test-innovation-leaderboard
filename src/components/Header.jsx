import { RefreshCw } from 'lucide-react'

export default function Header() {
  const now = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse-slow" />
          <span className="text-sky-600 text-[11px] font-semibold tracking-[0.14em] uppercase">
            AI Ideas Hub · Live
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
          Innovation{' '}
          <span className="gradient-text">Leaderboard</span>
        </h1>
        <p className="text-slate-400 mt-2 text-sm">
          Celebrating the brightest minds driving change ·{' '}
          <span className="text-slate-300">{now}</span>
        </p>
      </div>
      <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-xs self-start sm:self-auto pb-1 group">
        <RefreshCw size={13} className="group-hover:rotate-180 transition-transform duration-500" />
        Refresh
      </button>
    </div>
  )
}

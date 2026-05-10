import { useState } from 'react'
import { Trophy, ArrowUp, TrendingUp } from 'lucide-react'
import { contributors } from '../data'

const MAX_IDEAS = contributors[0].ideas

function RankLabel({ rank, rankColor, rankBorder, rankGlow }) {
  const isTop3 = rank <= 3
  const labels = { 1: '1st', 2: '2nd', 3: '3rd' }
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
      style={{ background: isTop3 ? rankGlow : 'transparent', color: rankColor, border: `1px solid ${rankBorder}` }}
    >
      {isTop3 ? labels[rank] : `#${rank}`}
    </div>
  )
}

export default function TopContributors() {
  const [hoveredRank, setHoveredRank] = useState(null)
  return (
    <div className="card h-full">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-slate-900 font-semibold text-base flex items-center gap-2">
            <Trophy size={18} className="text-amber-500" />
            Top Contributors
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">Ranked by total ideas submitted</p>
        </div>
        <span className="text-[11px] text-sky-600 border border-sky-200 bg-sky-50 rounded-full px-3 py-1">May 2026</span>
      </div>

      <div className="space-y-1">
        {contributors.map((c) => (
          <div
            key={c.rank}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-default transition-all duration-150 ${c.rank <= 3 ? 'bg-slate-50' : ''} hover:bg-slate-50`}
            onMouseEnter={() => setHoveredRank(c.rank)}
            onMouseLeave={() => setHoveredRank(null)}
          >
            <RankLabel rank={c.rank} rankColor={c.rankColor} rankBorder={c.rankBorder} rankGlow={c.rankGlow} />

            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.avatar} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
              {c.initials}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-800 font-medium text-sm truncate">{c.name}</span>
                <span className="hidden sm:inline text-[10px] text-slate-500 bg-slate-100 rounded-full px-2 py-0.5 whitespace-nowrap">{c.badge}</span>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 max-w-[100px] bg-slate-100 rounded-full h-1">
                  <div className="h-1 rounded-full bar-gradient transition-all duration-500" style={{ width: `${Math.round((c.ideas / MAX_IDEAS) * 100)}%` }} />
                </div>
                <span className="text-slate-400 text-[11px] truncate">{c.dept}</span>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-slate-900 font-bold text-sm">{c.ideas}</p>
              <p className="text-slate-400 text-[10px]">ideas</p>
            </div>

            <div className="text-right flex-shrink-0 hidden sm:block min-w-[52px]">
              <p className="text-sky-600 font-semibold text-sm">{c.points.toLocaleString()}</p>
              <p className="text-slate-400 text-[10px]">pts</p>
            </div>

            <div className={`flex items-center gap-0.5 text-emerald-600 text-[11px] font-medium flex-shrink-0 transition-opacity duration-150 ${hoveredRank === c.rank ? 'opacity-100' : 'opacity-0'}`}>
              <ArrowUp size={12} />{c.weeklyTrend}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 text-xs">
        <TrendingUp size={13} />
        Updated every 15 minutes · hover to see weekly change
      </div>
    </div>
  )
}

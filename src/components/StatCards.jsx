import { Lightbulb, Users, Rocket, Flame } from 'lucide-react'
import { statCards } from '../data'

const ICONS = [Lightbulb, Users, Rocket, Flame]

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {statCards.map((card, i) => {
        const Icon = ICONS[i]
        return (
          <div key={card.label} className="card card-hover animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="flex items-center gap-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: card.bg }}>
                <Icon size={24} style={{ color: card.color }} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">{card.label}</p>
                <p className="text-2xl font-bold text-slate-900 leading-none">{card.value}</p>
                <p className="text-[11px] mt-1" style={{ color: i === 0 || i === 2 ? card.color : '#94A3B8' }}>{card.sub}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

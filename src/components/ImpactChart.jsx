import { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts'
import { Zap } from 'lucide-react'
import { impactData } from '../data'

function renderActiveShape(props) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
  return (
    <g>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius - 4} outerRadius={outerRadius + 6}
        startAngle={startAngle} endAngle={endAngle} fill={fill} opacity={1} />
    </g>
  )
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const { name, value, color } = payload[0].payload
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2 h-2 rounded-full" style={{ background: color }} />
        <p className="text-slate-500 text-xs">{name}</p>
      </div>
      <p className="text-slate-900 font-bold text-xl">{value}<span className="text-slate-400 text-sm font-normal ml-1">%</span></p>
    </div>
  )
}

export default function ImpactChart() {
  const [activeIndex, setActiveIndex] = useState(null)
  return (
    <div className="card h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-slate-900 font-semibold text-base flex items-center gap-2">
          <Zap size={18} className="text-sky-500" />
          Ideas by Impact
        </h2>
        <p className="text-slate-400 text-xs mt-0.5">Distribution by impact level</p>
      </div>

      <div className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={impactData} cx="50%" cy="50%"
              innerRadius={102} outerRadius={118} paddingAngle={3} dataKey="value"
              activeIndex={activeIndex} activeShape={renderActiveShape}
              onMouseEnter={(_, i) => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)}
              stroke="none"
            >
              {impactData.map((entry, i) => (
                <Cell key={i} fill={entry.color}
                  opacity={activeIndex === null || activeIndex === i ? 1 : 0.3}
                  style={{ cursor: 'pointer', transition: 'opacity 0.15s' }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2.5 mt-4">
        {impactData.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between cursor-default transition-opacity"
            style={{ opacity: activeIndex === null || activeIndex === i ? 1 : 0.35 }}
            onMouseEnter={() => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <span className="text-slate-600 text-sm">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-slate-100 rounded-full h-1 hidden sm:block">
                <div className="h-1 rounded-full transition-all" style={{ width: `${item.value}%`, background: item.color }} />
              </div>
              <span className="text-slate-900 text-sm font-semibold w-8 text-right">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Users } from 'lucide-react'
import { departmentData } from '../data'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg">
      <p className="text-slate-400 text-xs mb-1">{label}</p>
      <p className="text-slate-900 font-bold text-xl">{payload[0].value}<span className="text-slate-400 text-sm font-normal ml-1">ideas</span></p>
    </div>
  )
}

function CustomLabel({ x, y, width, value }) {
  return (
    <text x={x + width / 2} y={y - 6} textAnchor="middle" fill="#94A3B8" fontSize={11}>{value}</text>
  )
}

const total = departmentData.reduce((sum, d) => sum + d.ideas, 0)

export default function DepartmentChart() {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-slate-900 font-semibold text-base flex items-center gap-2">
            <Users size={18} className="text-indigo-500" />
            Ideas by Department
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">Total submissions per team</p>
        </div>
        <span className="text-slate-400 text-sm font-medium">{total} total</span>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={departmentData} margin={{ top: 20, right: 8, left: -20, bottom: 0 }} barSize={36} barCategoryGap="28%">
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)', radius: 8 }} />
          <Bar dataKey="ideas" radius={[6, 6, 0, 0]} label={<CustomLabel />}>
            {departmentData.map((entry, i) => (
              <Cell key={i} fill={entry.color} opacity={0.85} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 pt-4 border-t border-slate-100">
        {departmentData.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: d.color }} />
            <span className="text-slate-400 text-xs">{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

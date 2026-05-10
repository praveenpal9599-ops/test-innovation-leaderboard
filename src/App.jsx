import Header from './components/Header'
import StatCards from './components/StatCards'
import TopContributors from './components/TopContributors'
import ImpactChart from './components/ImpactChart'
import DepartmentChart from './components/DepartmentChart'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-page bg-grid-light">
      {/* Subtle top radial wash */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% -5%, rgba(99,102,241,0.08) 0%, transparent 65%)',
        }}
      />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Header />
        <StatCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 animate-slide-up">
          <div className="lg:col-span-2">
            <TopContributors />
          </div>
          <div>
            <ImpactChart />
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '120ms' }}>
          <DepartmentChart />
        </div>

        <p className="text-center text-slate-300 text-xs mt-6">
          Built with React · Recharts · Tailwind CSS · Lucide Icons — AI Ideas Hub © 2026
        </p>
      </main>
    </div>
  )
}

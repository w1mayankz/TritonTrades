import { MessageCircleMore, Compass, Zap, Folder } from 'lucide-react'

const items = [
  {
    icon: MessageCircleMore,
    title: 'Personalized Guidance',
    body: 'Get direct answers to all your questions and feedback on the trades you take. Learn what went right and what to improve.',
  },
  {
    icon: Compass,
    title: 'Prop Firm Guidance',
    body: 'Learn how to pass challenges quickly and get payouts consistency with multiple firms.',
  },
  {
    icon: Zap,
    title: 'Master Execution',
    body: 'Learn how to trade using our simple strategy. Works on any market, any asset, & any trading session.',
  },
  {
    icon: Folder,
    title: 'Market Structure & Liquidity',
    body: 'Master the core concepts of Market Structure & Liquidity with our step-by-step lessons. Detailed examples included.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <div key={i} className="liquid-glass rounded-2xl p-6 flex flex-col">
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading italic text-white mb-3 leading-tight">
                  {it.title}
                </h3>
                <p className="text-white/60 font-body font-light text-sm">{it.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

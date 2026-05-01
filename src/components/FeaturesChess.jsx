import { ArrowUpRight } from 'lucide-react'
import feature1 from '../1.png'
import feature2 from '../2.png'
import feature3 from '../3.png'

const features = [
  {
    title: 'Live Trading Sessions',
    body: '4x per week, Tuesday to Friday. Watch Triton execute trades in the live markets. Learn from the live analysis and breakdowns, ask questions and get answers in real time.',
    image: feature3,
    reverse: false,
  },
  {
    title: 'Private Community.',
    body: 'Join like-minded traders inside. Share ideas, wins and executions. Get support and feedback from other traders and learn from them.',
    image: feature2,
    reverse: true,
  },
  {
    title: 'The CISD Model',
    body: 'Learn the trading model which Triton personally use daily, The CISD Model. This is a simple and repeatable model.',
    image: feature1,
    reverse: false,
  },
]

export default function FeaturesChess() {
  return (
    <section id="features" className="relative py-32 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            What You Will Get
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col gap-10 items-center ${
                f.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white leading-[0.95]">
                  {f.title}
                </h3>
                <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md">
                  {f.body}
                </p>
                <a
                  href="#cta"
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-medium font-body inline-flex items-center gap-2"
                >
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex-1 w-full">
                <div className="liquid-glass rounded-2xl overflow-hidden">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

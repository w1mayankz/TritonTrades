import { ArrowUpRight } from 'lucide-react'
import logo from '../Gmozyr6EBGbapDZMSeS7dwyTaIQ.png'

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Triton Trades" className="h-12 w-12" />
        </a>

        {/* Center Nav */}
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center gap-1">
          <a href="#home" className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition">
            Home
          </a>
          <a href="#features" className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition">
            Features
          </a>
          <a href="#stats" className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition">
            Stats
          </a>
          <a href="#testimonials" className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition">
            Testimonials
          </a>
          <a
            href="#cta"
            className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body flex items-center gap-1 hover:bg-white/90 transition"
          >
            Get Started <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#cta"
          className="md:hidden bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body flex items-center gap-1"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  )
}

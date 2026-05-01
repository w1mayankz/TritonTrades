import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import BlurText from './BlurText'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-visible" style={{ height: '1000px' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: '300px',
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 h-full"
        style={{ paddingTop: '150px' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span className="text-white text-xs md:text-sm font-body font-light pr-3">
            10% discount on every plan
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="Master The Market With Clarity"
          delay={100}
          animateBy="words"
          direction="bottom"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px] justify-center"
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mt-8"
        >
          We cut through the noise with a simple strategy, together with personal
          guidance to help you become an independent trader
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-4 mt-8"
        >
          <a
            href="#cta"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-medium font-body flex items-center gap-2"
          >
            Get Started <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#pricing"
            className="text-white text-sm font-medium font-body flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" /> See Pricing
          </a>
        </motion.div>

        {/* Partners Bar */}
        <div className="mt-auto pb-8 pt-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full">
          <div className="liquid-glass rounded-full px-4 py-2 text-white text-xs md:text-sm font-body font-medium">
            Trusted by 500+ Traders
          </div>
          <a
            href="#testimonials"
            className="text-2xl md:text-3xl font-heading italic text-white"
          >
            See All Testimonials
          </a>
        </div>
      </div>
    </section>
  )
}

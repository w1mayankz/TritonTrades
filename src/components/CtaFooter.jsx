import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { ArrowUpRight } from 'lucide-react'

export default function CtaFooter() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const src = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    } else if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      return () => hls.destroy()
    }
  }, [])

  return (
    <section id="cta" className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }}
      />

      <div className="relative z-20 px-6 lg:px-16 pt-32">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85]">
            Your Journey Starts Here.
          </h2>
          <p className="text-white/70 font-body font-light text-sm md:text-base max-w-xl mt-6">
            You can continue struggling with complicated strategies that don't work,
            or you can join Triton Trades and learn to trade using a simple strategy.
            The choice is yours.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a
              href="#"
              className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-medium font-body flex items-center gap-2"
            >
              I'm ready! <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium font-body"
            >
              Not sure
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-6xl mx-auto mt-32 pt-8 pb-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs font-body">
            Copyright 2026 Simple Traders. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs font-body hover:text-white transition">
              Telegram
            </a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white transition">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

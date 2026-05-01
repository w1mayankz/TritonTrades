import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { ArrowUpRight } from 'lucide-react'

export default function StartSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const src = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'
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
    <section className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }}
      />

      <div
        className="relative z-20 flex flex-col items-center text-center px-6 py-32"
        style={{ minHeight: '500px' }}
      >
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
          Your Ambition. Our Expertise.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mt-6">
          Join securely through Whop, Instantly get access to all premium educational
          resources, Community and Daily Live Streams.
        </p>
        <a
          href="#cta"
          className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-medium font-body flex items-center gap-2 mt-8"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

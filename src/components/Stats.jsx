import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const stats = [
  { value: '500+', label: 'Traders served' },
  { value: '$25k+', label: 'Student payouts' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '400+', label: '5-star reviews' },
]

export default function Stats() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const src = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'
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
    <section id="stats" className="relative w-full overflow-hidden py-32">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(0)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none">
                  {s.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

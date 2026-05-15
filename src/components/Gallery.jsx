import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=85',
    title: 'Sawah Hijau Nusantara',
    subtitle: 'Emerald rice fields stretching to the horizon',
    height: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85',
    title: 'Gunung Berkabut',
    subtitle: 'Misty mountain peaks at golden hour',
    height: 'short',
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85',
    title: 'Villa Modern Elite',
    subtitle: 'Luxury countryside villa architecture',
    height: 'short',
  },
  {
    src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=85',
    title: 'Danau Jernih',
    subtitle: 'Crystal-clear mountain lake reflection',
    height: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=85',
    title: 'Jalan Desa Elite',
    subtitle: 'Verdant countryside road at dusk',
    height: 'short',
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=85',
    title: 'Sunset Countryside',
    subtitle: 'Golden sunset over Swiss meadows',
    height: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1467042677700-350ab7c5a12f?w=800&q=85',
    title: 'Tuscany Vineyard',
    subtitle: 'Rolling Tuscan hills in autumn gold',
    height: 'short',
  },
  {
    src: 'https://images.unsplash.com/photo-1510784722466-f2aa240f7eed?w=800&q=85',
    title: 'Alpine Serenity',
    subtitle: 'Swiss Alps tranquil morning scene',
    height: 'short',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85',
    title: 'Forest Path',
    subtitle: 'Ancient forest bathed in emerald light',
    height: 'tall',
  },
]

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(#d4922a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-cinzel text-xs tracking-[0.5em] text-champagne-400 uppercase mb-4">
            Inspirasi
          </p>
          <h2 className="font-cinzel font-bold text-4xl sm:text-5xl text-ivory mb-4">
            Nature <span className="shimmer-gold">Gallery</span>
          </h2>
          <p className="font-playfair italic text-ivory/40 text-lg">
            The landscapes that fuel my creative vision
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-champagne-400/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
            <div className="h-px w-16 bg-champagne-400/30" />
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid mb-4 relative group overflow-hidden rounded-sm cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              onHoverStart={() => setHoveredIdx(i)}
              onHoverEnd={() => setHoveredIdx(null)}
            >
              <div className={`relative overflow-hidden ${img.height === 'tall' ? 'h-72 sm:h-80' : 'h-48 sm:h-56'}`}>
                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.75) saturate(1.1)' }}
                  animate={{ scale: hoveredIdx === i ? 1.08 : 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-midnight/70"
                  animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content on hover */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-5"
                  animate={{ opacity: hoveredIdx === i ? 1 : 0, y: hoveredIdx === i ? 0 : 10 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="font-cinzel text-xs tracking-widest text-champagne-400 uppercase mb-1">
                    {img.title}
                  </p>
                  <p className="font-inter text-xs text-ivory/70 italic">
                    {img.subtitle}
                  </p>
                </motion.div>

                {/* Gold border reveal */}
                <motion.div
                  className="absolute inset-0 border border-champagne-400/0 pointer-events-none"
                  animate={{ borderColor: hoveredIdx === i ? 'rgba(212,146,42,0.4)' : 'rgba(212,146,42,0)' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

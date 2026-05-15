import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { config } from '../data/socials'

const stats = [
  { number: '10+', label: 'Projects Built', icon: '🏗️' },
  { number: '2+', label: 'Certificates Earned', icon: '🏆' },
  { number: '10+', label: 'Skills Learned', icon: '⚡' },
  { number: '2+', label: 'Tahun Coding', icon: '🌱' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #059669, transparent)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-10"
        style={{ background: 'radial-gradient(circle, #d4922a, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-cinzel text-xs tracking-[0.5em] text-champagne-400 uppercase mb-4">
            Who I Am
          </p>
          <h2 className="font-cinzel font-bold text-4xl sm:text-5xl text-ivory mb-4">
            About <span className="shimmer-gold">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-champagne-400/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
            <div className="h-px w-16 bg-champagne-400/30" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-champagne-400/40 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-emerald-600/40 rounded-br-lg" />
              <div className="relative overflow-hidden rounded-sm shadow-luxury">
                <img
                  src="public/WhatsApp Image 2026-04-27 at 17.23.58.jpeg"
                  alt="About Yusuf"
                  className="w-full h-[450px] object-cover"
                  style={{ filter: 'brightness(0.8) saturate(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                <div className="absolute bottom-6 left-6 glass-card-dark px-4 py-3 rounded-sm border-gold">
                  <p className="font-cinzel text-xs tracking-widest text-champagne-400 uppercase">SMKN 1 Ciomas</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-inter text-sm text-ivory/70">Jurusan PPLG</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="glass-card rounded-sm p-8 sm:p-10 border-gold">
              <p className="font-cinzel text-xs tracking-[0.4em] text-emerald-400 uppercase mb-6">
                My Story
              </p>

              <h3 className="font-playfair text-2xl sm:text-3xl text-ivory mb-6 leading-snug">
                Siswa SMKN 1 Ciomas dengan{' '}
                <span className="italic text-champagne-400">Semangat Coding</span>
              </h3>

              <div className="space-y-4 font-inter text-ivory/65 leading-relaxed">
                <p>
                  Halo! Saya M. Yusuf Al Akil, siswa SMKN 1 Ciomas jurusan PPLG (Pengembangan Perangkat Lunak dan Gim). Saya passionate dalam dunia web development dan terus belajar untuk menjadi developer yang handal.
                </p>
                <p>
                  Saya berkesempatan mengikuti program beasiswa Coding Camp yang memperkaya pengalaman saya dalam dunia teknologi. Program ini membuka wawasan saya tentang industri teknologi yang sesungguhnya.
                </p>
                <p>
                  Saya percaya bahwa belajar coding bukan hanya soal kode, tapi tentang memecahkan masalah nyata dan menciptakan solusi yang bermanfaat bagi banyak orang.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {['React.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'PPLG'].map(tag => (
                  <span
                    key={tag}
                    className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 border border-champagne-400/20 text-champagne-400/80 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-sm p-6 text-center border-gold group hover:border-champagne-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="stat-number text-3xl sm:text-4xl font-bold mb-1">{stat.number}</div>
              <p className="font-inter text-xs text-ivory/40 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

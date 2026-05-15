import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollProgressBar from './components/ScrollProgressBar'
import BackToTop from './components/BackToTop'
import LeafFall from './components/LeafFall'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Toaster position="top-center" />
      <ScrollProgressBar />
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Ambient leaf fall effect */}
            <LeafFall />

            <Navbar />

            <main>
              <ErrorBoundary fallbackMessage="Hero section encountered an error.">
                <Hero />
              </ErrorBoundary>

              <ErrorBoundary>
                <About />
              </ErrorBoundary>

              <ErrorBoundary>
                <Stats />
              </ErrorBoundary>

              <ErrorBoundary>
                <Skills />
              </ErrorBoundary>

              <ErrorBoundary>
                <Projects />
              </ErrorBoundary>

              <ErrorBoundary>
                <Certificates />
              </ErrorBoundary>

              <ErrorBoundary>
                <Timeline />
              </ErrorBoundary>

              <ErrorBoundary>
                <Gallery />
              </ErrorBoundary>

              <ErrorBoundary>
                <Contact />
              </ErrorBoundary>
            </main>

            <Footer />
            <WhatsAppButton />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

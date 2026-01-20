import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import ScrollBanner from './components/ScrollBanner'
import FloatingButton from './components/FloatingButton'

function App() {
  return (
    <div className="bg-background-dark font-display text-white selection:bg-electric-blue selection:text-white overflow-x-hidden">
      <ScrollBanner />
      <Header />
      <main className="max-w-[1440px] mx-auto px-6 py-12">
        <Hero />
        <div className="bento-grid">
          <Skills />
          <Projects />
        </div>
        <Experience />
        <Footer />
      </main>
      <FloatingButton />
    </div>
  )
}

export default App

import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-6 py-6 bg-background-dark/80 backdrop-blur-md sticky top-[33px] z-40">
      <div className="flex items-center gap-4">
        <div className="size-10 flex items-center justify-center bg-electric-blue border-2 border-white/20">
          <span className="material-symbols-outlined text-white text-xl">terminal</span>
        </div>
        <h2 className="text-xl font-bold tracking-tighter uppercase font-mono">MIDHUN.K // DEV</h2>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <a className="text-xs font-bold hover:text-electric-blue transition-colors uppercase tracking-widest" href="#skills">
          Capabilities
        </a>
        <a className="text-xs font-bold hover:text-electric-blue transition-colors uppercase tracking-widest" href="#experience">
          History
        </a>
        <a className="text-xs font-bold hover:text-electric-blue transition-colors uppercase tracking-widest" href="#projects">
          Deployments
        </a>
        <a className="text-xs font-bold hover:text-electric-blue transition-colors uppercase tracking-widest" href="#contact">
          Terminal
        </a>
      </nav>
      <div className="flex gap-2">
        <button className="flex items-center justify-center border-2 border-electric-blue h-10 px-6 bg-transparent text-white text-xs font-bold uppercase tracking-widest hover:bg-electric-blue transition-all">
          SSH Connect
        </button>
      </div>
    </header>
  )
}

export default Header

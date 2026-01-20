import React from 'react'

function Hero() {
  return (
    <div className="mb-20">
      <div className="glitch-wrapper">
        <h1 className="glitch-text text-[clamp(4rem,15vw,12rem)] font-bold leading-[0.8] tracking-tighter uppercase mb-6" data-text="MIDHUN K">
          MIDHUN K
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t-4 border-electric-blue pt-6 gap-6">
        <p className="max-w-xl text-gray-400 text-xl font-medium leading-relaxed">
          Architecting high-performance, scalable web applications with <span className="text-white">React, TypeScript, and Node.js</span>. Delivering production-grade solutions for complex enterprise ecosystems.
        </p>
        <div className="text-right font-mono">
          <span className="block text-electric-blue font-bold">STATUS: DEPLOYING_CODE</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Based in Calicut, Kerala, IN</span>
        </div>
      </div>
    </div>
  )
}

export default Hero

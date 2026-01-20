import React from 'react'

function Footer() {
  const contactLinks = [
    {
      label: 'EMAIL_ADDRESS',
      value: 'midkallanoor@gmail.com',
      href: 'mailto:midkallanoor@gmail.com'
    },
    {
      label: 'GITHUB_REPOS',
      value: '/midhun-k',
      href: 'https://github.com/midhunk7228'
    },
    {
      label: 'LINKEDIN_URI',
      value: '/in/midhun-k',
      href: 'https://www.linkedin.com/in/midhun-k-030131208/'
    }
  ]

  const techStack = ['React', 'Node.js', 'TypeScript', 'Next.js', 'AWS', 'Docker']

  return (
    <footer className="mt-40 mb-12 text-center border-t border-white/10 pt-32" id="contact">
      <h2 className="text-[clamp(3rem,18vw,15rem)] font-bold tracking-tighter leading-[0.7] uppercase mb-16">
        LET'S <span className="text-electric-blue italic">BUILD</span> IT
      </h2>
      <div className="flex flex-col items-center gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl font-mono">
          {contactLinks.map((link, index) => (
            <a 
              key={index}
              className="p-8 border-2 border-white/10 hover:border-electric-blue transition-all group" 
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="block text-[10px] text-gray-500 mb-2">{link.label}</span>
              <span className="text-lg font-bold">{link.value}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-bold uppercase tracking-[0.4em] opacity-40">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="mt-40 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono border-t border-white/5 pt-8">
        <p>© 2024 MIDHUN K // SENIOR ENGINEER // BUILD_HASH: 7f2a1b9</p>
        <p className="mt-4 md:mt-0">DESIGNED TO DISRUPT // 11.2588° N, 75.7804° E</p>
      </div>
    </footer>
  )
}

export default Footer

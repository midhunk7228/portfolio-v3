import React from 'react'

function Skills() {
  const mainSkills = [
    { icon: 'javascript', name: 'React.js', category: 'FRAMEWORK' },
    { icon: 'data_object', name: 'TypeScript', category: 'TYPING' },
    { icon: 'dynamic_feed', name: 'Next.js', category: 'SSR/SSG' },
    { icon: 'settings_ethernet', name: 'Node.js', category: 'RUNTIME' },
  ]

  const otherSkills = ['Redux Toolkit', 'Supabase', 'AWS EC2', 'GraphQL', 'Docker']

  return (
    <>
      <div className="col-span-12 md:col-span-8 row-span-4 bg-zinc-900 border-2 border-white/10 p-8 relative overflow-hidden group" id="skills">
        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-electric-blue opacity-50">SKILL_MATRIX_V2</div>
        <h3 className="text-5xl font-bold uppercase mb-12 tracking-tighter">
          Technical<br/><span className="text-electric-blue">Capabilities</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mainSkills.map((skill, index) => (
            <div key={index} className="p-6 border-2 border-white/5 hover:border-electric-blue transition-all group/icon cursor-crosshair">
              <div className="size-12 mb-4 flex items-center justify-center bg-white/5 group-hover/icon:bg-electric-blue transition-colors">
                <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
              </div>
              <span className="block font-bold uppercase text-xs tracking-widest">{skill.name}</span>
              <span className="text-[10px] text-gray-500 font-mono">{skill.category}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-2">
          {otherSkills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-white/5 text-[10px] font-bold uppercase tracking-widest border border-white/10">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 row-span-4 bg-black border-2 border-electric-blue/50 p-6 font-mono overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
          <div className="size-2 rounded-full bg-red-500"></div>
          <div className="size-2 rounded-full bg-yellow-500"></div>
          <div className="size-2 rounded-full bg-green-500"></div>
          <span className="text-[10px] ml-2 text-gray-500 uppercase">root@midhun-k:~</span>
        </div>
        <div className="text-xs space-y-3 leading-relaxed">
          <div className="text-electric-blue">&gt; cat summary.txt</div>
          <div className="text-gray-300">
            Results-driven Senior Frontend Engineer with 4+ years of hands-on experience in developing scalable, production-grade web applications.
          </div>
          <div className="text-gray-300">
            Demonstrated expertise in modern frontend architecture, performance optimization, responsive design, and seamless backend integration.
          </div>
          <div className="text-electric-blue">&gt; ls /experience</div>
          <div className="text-white">
            - Exthgen_Technologies<br/>
            - Acodez_IT_Solutions<br/>
            - Maxlore_Innovations
          </div>
          <div className="flex items-center gap-1">
            <span className="text-electric-blue">&gt;</span>
            <span className="w-2 h-4 bg-electric-blue animate-pulse"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills

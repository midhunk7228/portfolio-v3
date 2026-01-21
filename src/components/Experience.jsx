import React from 'react'

function Experience() {
  const experiences = [
    {
      period: '2024—PRES',
      title: 'Software Developer',
      company: 'Exthgen Technologies — Calicut, Kerala',
      achievements: [
        'Led refactoring of large-scale ERP systems with legacy codebases into modular React + TypeScript architectures.',
        'Architected responsive business dashboards improving operational friction for internal teams by 40%.',
        'Integrated Supabase for real-time authentication, role-based access control, and secure file storage.'
      ]
    },
    {
      period: '2021—2024',
      title: 'Software Developer',
      company: 'Acodez IT Solutions — Calicut, Kerala',
      achievements: [
        'Developed production-ready Shopify applications including Product Labels & Badges app serving multiple merchants.',
        'Mentored and trained junior developers through structured code reviews and technical documentation.',
        'Modernized legacy codebases resulting in improved performance, stability, and reduced technical debt.'
      ]
    },
    {
      period: '2019—2020',
      title: 'Dev Intern',
      company: 'Maxlore Innovations — Calicut, Kerala',
      achievements: [
        'Developed responsive, cross-browser compatible frontend interfaces using HTML5, CSS3, and jQuery.',
        'Implemented modern UI/UX improvements focusing on accessibility and visual consistency.',
        'Optimized relational database schemas using Django ORM for hotel inventory systems.'
      ]
    }
  ]

  return (
    <section className="mt-32 border-t-4 border-electric-blue pt-16" id="experience">
      <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
        <h2 className="text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
          Professional<br/><span className="text-electric-blue font-mono text-4xl tracking-normal">// JOURNEY</span>
        </h2>
        <div className="max-w-md">
          <p className="text-gray-400 font-medium text-lg leading-relaxed">
            A track record of engineering excellence, from refactoring legacy ERP systems to building scalable Shopify apps and responsive business dashboards.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative bg-zinc-900 border-2 border-white/5 hover:border-electric-blue transition-all duration-500 overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <span className="text-electric-blue font-mono font-bold text-xl">{exp.period}</span>
                <div>
                  <h4 className="text-3xl font-bold uppercase tracking-tighter">{exp.title}</h4>
                  <p className="text-sm font-mono text-gray-500 mt-1">{exp.company}</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="material-symbols-outlined text-4xl transform group-hover:rotate-45 transition-transform duration-500">add</span>
              </div>
            </div>
            <div className="max-h-0 group-hover:max-h-screen transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
              <div className="px-8 pb-8 pt-0 border-t border-white/10 mt-4">
                <ul className="mt-6 space-y-4 text-gray-400 font-medium">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex gap-4">
                      <span className="text-electric-blue font-mono">{(achIndex + 1).toString().padStart(2, '0')}.</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

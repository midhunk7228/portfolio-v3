import React from 'react'

function Projects() {
  const projects = [
    {
      id: 'exhpay',
      title: 'Exhpay',
      tag: 'Production',
      tagBg: 'bg-electric-blue',
      description: 'Enterprise Payroll Management Platform with automated tax calculation and regulatory compliance reporting.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClrYxh_OR5dlhE3qnFA8Wi98HaSoOOomEgjvvz_y8bRGFWX3V-iHZV1muiUsrPdlHxR4You7KGUKv6XGqThWukBJgpukPW_WJOGauFLW2LpHahf6P_SUKU2Cj7Ca8_YDfoIWdUmvwD5l-0OE9MrRTHVEKUpv_JTDUmFc74XfJW4Lu5YO7c_dPSoUeF51HqZQ58NBynZvBmfRvIFMrEy4JbQmxTsPvyo4bMI-0AfH9zpOWlglE_Mk0BIjlhBsF0ICQqWOlAyVOIScA',
      code: [
        'const calculatePayroll = (data) => {',
        'const tax = data.salary * 0.15;',
        'return data.salary - tax + data.bonus;',
        '};',
        'export default function PayrollEngine() { ... }'
      ],
      iconColor: 'text-electric-blue'
    },
    {
      id: 'brickly',
      title: 'Brickly',
      tag: 'SaaS App',
      tagBg: 'bg-white text-black',
      description: 'Full-cycle Construction Project Management system featuring cost tracking, resource allocation, and real-time reporting.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfuYVGMNUqsn0VSUt519oN3Bk7HC4AnS5oxe-LDqdicF2SJxYF5OrX2tUKl-QCjMmjAjX_4Ah-MpdgyBeShIS1NAp3BawUX1ih5RUXO7ajWyNgl8xlGk9Bc2WfQ58JlXBOsRo46pH4l8iIphFH_lyTeJD9k1Jtu5trQmj524dHSkxpsvhHzBJrnCAdqTudsMmz5BGHWIOVrovN4JCf-LoI4FFXJtl09CGYXnjZmfkLXOY1AUoFCTN3zQ4q3GKgCKVahE3JV5o-JI4',
      code: [
        "import { useProjectTracker } from '@/hooks/brickly';",
        'const [resources, setResources] = useState([]);',
        'useEffect(() => fetchRealtimeData(), []);',
        '<ConstructionDashboard>',
        '<GanttChart data={projects} />',
        '</ConstructionDashboard>'
      ],
      iconColor: 'text-white',
      italic: true
    }
  ]

  return (
    <>
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className="col-span-12 md:col-span-6 row-span-4 x-ray-card relative bg-zinc-900 border-2 border-white/10 overflow-hidden group cursor-pointer"
          id={index === 0 ? 'projects' : undefined}
        >
          <div 
            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 bg-cover bg-center" 
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), transparent), url('${project.imageUrl}')`
            }}
          ></div>
          <div className="x-ray-content absolute inset-0 z-10 flex flex-col p-8 font-mono text-[10px] text-electric-blue overflow-hidden pointer-events-none">
            {project.code.map((line, lineIndex) => {
              if (project.id === 'exhpay') {
                // Exhpay code formatting
                if (lineIndex === 0) return <div key={lineIndex} className="mb-4">{line}</div>
                if (lineIndex === 1 || lineIndex === 2) return <div key={lineIndex} className="ml-4">{line}</div>
                if (lineIndex === 3) return <div key={lineIndex}>{line}</div>
                if (lineIndex === 4) return <div key={lineIndex} className="mt-4">{line}</div>
                return <div key={lineIndex} className="mt-4"></div>
              } else {
                // Brickly code formatting
                if (lineIndex === 0) return <div key={lineIndex} className="mb-4">{line}</div>
                if (lineIndex === 1 || lineIndex === 2) return <div key={lineIndex} className="ml-4">{line}</div>
                if (lineIndex === 3) return <div key={lineIndex} className="mt-4"><div>{line}</div></div>
                if (lineIndex === 4) return <div key={lineIndex} className="ml-4"><div>{line}</div></div>
                if (lineIndex === 5) return <div key={lineIndex}><div>{line}</div></div>
                return null
              }
            })}
          </div>
          <div className={`absolute top-4 left-4 ${project.tagBg} text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-20`}>
            {project.tag}
          </div>
          <div className="absolute bottom-8 left-8 z-20">
            <h4 className={`text-6xl font-bold uppercase tracking-tighter mb-2 ${project.italic ? 'italic' : ''}`}>
              {project.title}
            </h4>
            <p className="text-gray-300 max-w-sm font-medium">{project.description}</p>
          </div>
          <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
            <span className={`material-symbols-outlined text-4xl ${project.iconColor}`}>open_in_new</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default Projects

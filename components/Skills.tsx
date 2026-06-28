import React from 'react'

const tech = ['TypeScript','React','Next.js','Tailwind CSS','Node.js','GraphQL','Framer Motion','Vercel']

export default function Skills(){
  return (
    <div>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="mt-2 text-slate-400">Technologies I work with frequently.</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {tech.map(t => (
          <span key={t} className="text-sm px-3 py-1 rounded-full bg-white/4 text-slate-200">{t}</span>
        ))}
      </div>
    </div>
  )
}

"use client"
import React from 'react'
import { Github, ExternalLink } from './icons'

const projects = [
  {
    title: 'ai-resume',
    desc: 'A web application that generates resumes using AI. It allows users to input their information and receive a professionally formatted resume in return.',
    tech: ['Next.js','Tailwind CSS','OpenAI API','Gemini','Vercel'],
    demo: 'https://ai-resume-kappa-ten.vercel.app/',
    code: 'https://github.com/ITR090/ai-resume'
  },
  {
    title: 'Ecommerce MERN Stack App',
    desc: 'A full-stack e-commerce application built with the MERN stack. It includes features like product listing, shopping cart, and user authentication.',
    tech: ['React','Node.js','Express','MongoDB','Tailwind CSS','Kafka','Redis'],
    demo: '#',
    code: 'https://github.com/ITR090/Node.js-Microservices-with-Postgresql-MongoDB-Kafka-Docker'
  },
  {
    title: 'GCP Serverless',
    desc: 'A serverless application deployed on Google Cloud Platform (GCP) using various GCP services. It demonstrates the use of cloud functions, storage, and Firestore for building scalable applications.',
    tech: ['React Vite','Tailwind CSS','Cloud Run','Cloud Build','Cloud Storage','Cloud Run Functions','Cloud Firestore','Cloud IAM'],
    demo: 'https://fullstack-app-afp-69338693715.europe-west1.run.app/',
    code: 'https://github.com/ITR090/GCP-Serverless-Playground'
  }
]

export default function Projects(){
  return (
    <div>
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <p className="mt-2 text-slate-400">A curated selection of my work.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.title} className="rounded-xl glass p-4 border border-white/6">
            <h3 className="font-medium text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-white/5">{t}</span>)}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a href={p.demo} className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded bg-primary text-white">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a href={p.code} className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded border border-white/6">
                <Github className="w-4 h-4" /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

"use client"
import React from 'react'
import { Github, Linkedin, Mail } from './icons'

export default function Footer(){
  return (
    <footer className="mt-20 py-8 text-slate-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} Raghad</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ITR090" aria-label="GitHub" className="hover:text-white"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/raghad-alzeer" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:raghadalzeer60@gmail.com" aria-label="Email" className="hover:text-white"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

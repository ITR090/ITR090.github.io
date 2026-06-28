"use client"
import React from 'react'
import { Code } from './icons'

export default function Navbar(){
  return (
    <nav className="fixed w-full top-4 left-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-xl border border-white/6 backdrop-blur-md shadow-md py-3 px-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 text-sm font-medium">
            <Code className="w-5 h-5" />
            <span>Raghad</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#projects" className="text-sm hover:text-white/90 transition">Projects</a>
            <a href="#skills" className="text-sm hover:text-white/90 transition">Skills</a>
           
          </div>

          <div className="md:hidden">
            
          </div>
        </div>
      </div>
    </nav>
  )
}

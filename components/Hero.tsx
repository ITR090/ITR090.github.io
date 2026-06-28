"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <div className="py-16">
      <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Hi, I'm a Frontend Developer</h1>
        {/* <p className="mt-4 text-slate-300 max-w-2xl">I build accessible, performant web applications with a focus on DX and product design.</p> */}

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95">View Projects</a>
          {/* <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/8 px-4 py-2 text-sm font-medium text-slate-200">Contact Me</a> */}
        </div>
      </motion.div>
    </div>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from  '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Page(){
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Navbar />
      <section id="hero" className="pt-24">
        <Hero />
      </section>

      <section id="skills" className="mt-20">
        <Skills />
      </section>

      <section id="projects" className="mt-20">
        <Projects />
      </section>

      <Footer />
    </main>
  )
}

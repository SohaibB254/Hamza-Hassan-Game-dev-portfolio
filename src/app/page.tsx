'use client'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Footer from '@/components/Footer'
import { useState } from 'react'
import BootScreen from '@/components/Bootscreen'
const Home =  () => {
  const [contentLoaded, setContentLoaded ] = useState(false)

  if(!contentLoaded) {
    return <BootScreen onComplete={() => setContentLoaded(true)}/>
  }
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    <Services/>
    <Footer/>
    </>
  )
}

export default Home

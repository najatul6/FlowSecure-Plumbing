import React from 'react'
import HeroSection from '../../Components/Home/HeroSection'
import ServicesSection from '../../Components/Home/ServiceSection'
import AboutSection from '../../Components/Home/AboutSection'
import TestimonialsSection from '../../Components/Home/TestimonialsSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
        <TestimonialsSection/>
    </div>
  )
}

export default Home
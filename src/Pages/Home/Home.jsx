import React from 'react'
import HeroSection from '../../Components/Home/HeroSection'
import ServicesSection from '../../Components/Home/ServiceSection'
import AboutSection from '../../Components/Home/AboutSection'
import TestimonialsSection from '../../Components/Home/TestimonialsSection'
import CTASection from '../../Components/Home/CTASection'
import ContactSection from '../../Components/Home/ContactSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
        <TestimonialsSection/>
        <CTASection/>
        <ContactSection/>
    </div>
  )
}

export default Home
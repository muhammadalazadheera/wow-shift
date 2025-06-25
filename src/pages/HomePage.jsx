import React from 'react'
import Slider from './../components/Home/Slider/Slider'
import HowItWorks from '../components/Home/HIW/HowItWorks'
import ServicesSection from '../components/Home/OurServices/ServicesSection'

function HomePage() {
  return (
    <div>
      <Slider></Slider>
      <HowItWorks></HowItWorks>
      <ServicesSection></ServicesSection>
    </div>
  )
}

export default HomePage
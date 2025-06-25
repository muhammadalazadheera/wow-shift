import React from 'react'
import Slider from './../components/Home/Slider/Slider'
import HowItWorks from '../components/Home/HIW/HowItWorks'
import ServicesSection from '../components/Home/OurServices/ServicesSection'
import Brands from '../components/Home/Brands/Brands'

function HomePage() {
  return (
    <div>
      <Slider></Slider>
      <HowItWorks></HowItWorks>
      <ServicesSection></ServicesSection>
      <Brands></Brands>
    </div>
  )
}

export default HomePage
import React from 'react'
import Marquee from 'react-fast-marquee'
import brand1 from '../../../../public/assets/brands/amazon.png'
import brand2 from '../../../../public/assets/brands/casio.png'
import brand3 from '../../../../public/assets/brands/moonstar.png'
import brand4 from '../../../../public/assets/brands/randstad.png'
import brand5 from '../../../../public/assets/brands/start-people.png'
import brand6 from '../../../../public/assets/brands/start.png'

function Brands() {
  return (
    <div className='my-10'>
        <h1 className='text-3xl font-extrabold text-center my-5 text-[#03373d]'>We Helped Thousand Of Sales Team</h1>
        <Marquee>
            <div className="py-4 px-10">
                <img src={brand1} alt="" />
            </div>
            <div className="py-4 px-10">
                <img src={brand2} alt="" />
            </div>
            <div className="py-4 px-10">
                <img src={brand3} alt="" />
            </div>
            <div className="py-4 px-10">
                <img src={brand4} alt="" />
            </div>
            <div className="py-4 px-10">
                <img src={brand5} alt="" />
            </div>
            <div className="py-4 px-10">
                <img src={brand6} alt="" />
            </div>
        </Marquee>
    </div>
  )
}

export default Brands   
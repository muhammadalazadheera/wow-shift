import React from 'react'
import SectionTitle from '../../Global/SectionTitle'

function HowItWorks() {
  return (
    <div className='w-[90%] mx-auto'>
      <SectionTitle title="How It Works"></SectionTitle>
      <div className="grid grid-cols-4 gap-4 my-8">
        <div className="px-5 py-8 bg-white border border-black/20 shadow rounded-2xl">
          <div className="hiw-icon">
            <i className="fas fa-truck-moving text-3xl"></i>
          </div>
          <div className="hiw-caption my-2">
            <h2 className='text-lg  font-bold'>Booking Pick And Drop</h2>
          </div>
          <div className="hiw-details">
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
        </div>
        <div className="px-4 py-8 bg-white border border-black/20 shadow rounded-2xl">
          <div className="hiw-icon">
            <i className="fas fa-truck-moving text-3xl"></i>
          </div>
          <div className="hiw-caption my-2">
            <h2 className='text-lg  font-bold'>Booking Pick And Drop</h2>
          </div>
          <div className="hiw-details">
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
        </div>
        <div className="px-4 py-8 bg-white border border-black/20 shadow rounded-2xl">
          <div className="hiw-icon">
            <i className="fas fa-truck-moving text-3xl"></i>
          </div>
          <div className="hiw-caption my-2">
            <h2 className='text-lg  font-bold'>Booking Pick And Drop</h2>
          </div>
          <div className="hiw-details">
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
        </div>
        <div className="px-4 py-8 bg-white border border-black/20 shadow rounded-2xl">
          <div className="hiw-icon">
            <i className="fas fa-truck-moving text-3xl"></i>
          </div>
          <div className="hiw-caption my-2">
            <h2 className='text-lg  font-bold'>Booking Pick And Drop</h2>
          </div>
          <div className="hiw-details">
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
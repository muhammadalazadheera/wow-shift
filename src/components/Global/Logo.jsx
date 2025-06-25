import React from 'react'
import logo from '../../../public/assets/logo.png'

function Logo() {
  return (
    <div className='flex items-baseline'>
        <img src={logo} alt="" />
        <p className='text-[32px] -ml-4 font-extrabold'>WowShift</p>
    </div>
  )
}

export default Logo 
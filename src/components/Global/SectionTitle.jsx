import React from 'react'

function SectionTitle({title, subtitle}) {
  return (
    <div className='capitalize'>
        <h1 className='font-extrabold text-3xl'>{title}</h1>
        <h2 className=''>{subtitle}</h2>
    </div>
  )
}

export default SectionTitle;
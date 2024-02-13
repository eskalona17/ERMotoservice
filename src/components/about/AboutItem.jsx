import React from 'react'

const AboutItem = ({ image, description, flexDirection }) => {
  return (
    <div className={`py-10 flex flex-col ${flexDirection === 'row' ? 'lg:flex-row' : 'lg:flex-row-reverse'}
    items-center w-full
    `}>
      
      <div className='md:w-7/12'>
        <img src={image} className='object-fit w-full' alt="" />
      </div>
      <p className='p-10 lg:p-0 lg:w-4/12 md:text-lg lg:text-2xl lg:mx-64'>{description}</p>
    </div>
  )
}

export default AboutItem

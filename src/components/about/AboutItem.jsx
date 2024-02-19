import React from 'react'

const AboutItem = ({ image, description, flexDirection }) => {
  return (
    <div className={`flex flex-col ${flexDirection === 'row' ? 'lg:flex-row' : 'lg:flex-row-reverse'}
    items-center w-full pb-10 lg:pb-0 lg:border-t-2 lg:border-secondary-300 lghover:bg-secondary-200
    `}>
      
        <div className='w-full lg:w-7/12'>
          <img src={image} className='object-fit w-full h-[32rem]' loading='lazy' alt="" />

        </div>
      <p className='text-secondary-700 px-10 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48'>{description}</p>
    </div>
  )
}

export default AboutItem

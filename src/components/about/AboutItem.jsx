import React from 'react'

const AboutItem = ({ image, description, flexDirection, alt }) => {
  return (
    <div className={`flex flex-col ${flexDirection === 'row' ? 'lg:flex-row' : 'lg:flex-row-reverse'}
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}>
      
        <div className='w-full lg:w-7/12'>
          <img src={import.meta.env.BASE_URL + image} className='object-fit w-full hover:reflect_right' loading='lazy' alt={alt} />

        </div>
      <p className='text-secondary-800 px-10 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48'>{description}</p>
    </div>
  )
}

export default AboutItem

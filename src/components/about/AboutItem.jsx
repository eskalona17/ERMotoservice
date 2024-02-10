import React from 'react'

const AboutItem = ({ image, description }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <p>{image}</p>
      <p>{description}</p>
    </div>
  )
}

export default AboutItem

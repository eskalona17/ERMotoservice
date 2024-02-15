import React from "react"

const ServicesItem = ({ icon, title, description }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 mx-4 shadow-md ">
      <div className="flex items-center justify-center text-3xl mb-4">{icon}</div>
      <h3 className="text-primary-700 text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-secondary-500 p-2 text-center">{description}</p>
    </div>
  )
}

export default ServicesItem

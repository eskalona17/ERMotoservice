import React from "react"

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 mx-4 shadow-md ">
      <div className="flex items-center justify-center text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 p-2 text-center">{description}</p>
    </div>
  )
}

export default Card

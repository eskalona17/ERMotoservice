import React from "react"
import { PiMotorcycleFill } from "react-icons/pi"


const AboutItem = ({ image, description, flexDirection, alt }) => {
  const getSentences = () => {
    return description.replace(/\s+/g, " ").trim().split(". ")
  }

  return (
    <article
      className={`flex flex-col ${
        flexDirection === "row" ? "lg:flex-row" : "lg:flex-row-reverse"
      }
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}
    >
      <div className="w-full lg:w-7/12">
        <img
          src={image}
          className="object-fit w-full hover:reflect-right aspect-auto"
          loading="lazy"
          alt={alt}
        />
      </div>
        <ul className="list-none space-y-5 text-secondary-800 px-7 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48">
          {getSentences().map((sentence, index) => (
            <li key={index} className="flex">
              <PiMotorcycleFill size={24} className="w-2/12" style={{ color: "#378dc0" }} />
              <span className="w-full">{sentence}</span>
              </li>
          ))}
        </ul>
    </article>
  )
}

export default AboutItem

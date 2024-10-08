import React from "react"
import AboutItem from "./AboutItem"
import { about } from "../../assets/data"

const About = () => {
  return (
    <section id="about" className="flex flex-col my-12 lg:my-24 bg-gradient-to-b from-secondary-50 via-secondary-100 to-secondary-100 lg:border-secondary-300">
      {about.map((item, index) => (
        <AboutItem key={item.id} 
          {...item}
          flexDirection={getStyleForIndex(index)}
        />
      ))}
    </section>
  )
}


const getStyleForIndex = (index) => {
  if (index === 0 || index === 2) {
    return "row"
  } else if (index === 1) {
    return "row-reverse hover:reflect-left"
  }
}

export default About

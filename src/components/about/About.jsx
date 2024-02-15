import React from "react"
import { about } from "../../assets/data/data"
import AboutItem from "./AboutItem"

const About = () => {
  return (
    <section className="bg-gradient-to-b from-secondary-50 via-secondary-100 to-secondary-100 my-10">
        {about.map((item, index) => (
          <AboutItem 
          key={item.id} 
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
    return "row-reverse"
  }
}

export default About

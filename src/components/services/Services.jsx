  import React from "react"
  import ServicesItem from "../services/ServicesItem"
  import { data } from "../../assets/data/data"
  import { LuShieldCheck } from "react-icons/lu"
  import { FaRegHandshake } from "react-icons/fa6"
  import { PiTruck } from "react-icons/pi"

  const Services = () => {
    return (
      <section id="services" className="custom-screen flex flex-row overflow-x-auto space-x-4 lg:justify-center">
        {data.map((item) => (
          <ServicesItem key={item.id} {...item} icon={renderIcon(item.icon, "#215a83", 40)}/>
        ))}
      </section>
    )
  }

  const renderIcon = (icon, color, size) => {
    switch (icon) {
      case "security":
        return <LuShieldCheck style={{ color, fontSize: size }}/>
      case "care":
        return <FaRegHandshake style={{ color, fontSize: size }}/>
      case "experience":
        return <PiTruck style={{ color, fontSize: size }}/>
      default:
        return null
    }
  };

  export default Services

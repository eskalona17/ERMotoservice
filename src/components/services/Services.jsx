import React, { useEffect, useMemo, useRef, useState } from "react";
import ServicesItem from "../services/ServicesItem";
import { data } from "../../assets/data";
import { LuShieldCheck } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa6";
import { PiTruck } from "react-icons/pi";

const Services = () => {
  const targetRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = targetRefs.current.indexOf(entry.target);
        setActiveIndex(index);
      }
    });
  };

  const observerOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    targetRefs.current.forEach((target) => {
      if (target) observer.observe(target);
    });

    return () => {
      targetRefs.current.forEach((target) => {
        if (target) observer.unobserve(target);
      });
    };
  }, [observerOptions]);

  const renderIcon = (icon, color, size) => {
    switch (icon) {
      case "security":
        return <LuShieldCheck style={{ color, fontSize: size }} />;
      case "care":
        return <FaRegHandshake style={{ color, fontSize: size }} />;
      case "experience":
        return <PiTruck style={{ color, fontSize: size }} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      className="custom-screen flex flex-col lg:justify-center"
    >
      <div className="flex flex-row overflow-x-auto pb-4">
        {data.map((item, index) => (
          <ServicesItem
            key={item.id}
            ref={(el) => (targetRefs.current[index] = el)}
            {...item}
            icon={renderIcon(item.icon, "#215a83", 40)}
          />
        ))}
      </div>

      <div className="pt-4 space-x-2 flex justify-center">
        {data.map((_, index) => (
          <span
            key={index}
            className={`dot w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { about } from "../../assets/data/data";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="custom-screen p-4 ">
      {about.map((item) => (
        <AboutItem key={item.id} {...item} />
      ))}
      </div>
      
    </section>
  );
};

export default About;

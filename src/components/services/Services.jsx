import React from "react";
import Card from "../card/Card";
import { data } from "../../assets/data/data"

const Services = () => {
  return (
    <section className="custom-screen flex flex-row overflow-x-auto p-4 space-x-4 md:justify-center">
      {data.map((item) => (
        <Card key={item.id} {...item}/>
      ))}
    </section>
  );
}

export default Services;

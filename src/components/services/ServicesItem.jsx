import React, { forwardRef } from "react";

const ServicesItem = forwardRef(({ icon, title, description, ...restProps }, ref) => {
  return (
    <article ref={ref} className="flex-shrink-0 w-72 lg:w-80 bg-white rounded-lg p-6 mx-2 lg:mx-4 shadow-md" {...restProps}>
      <span className="flex items-center justify-center text-3xl mb-4">{icon}</span>
      <h3 className="text-primary-700 text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-secondary-500 p-2 text-center">{description}</p>
    </article>
  );
});

export default ServicesItem;

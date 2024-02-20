import React from "react";

const HeaderItem = ({ id, link, onClick }) => {
  return (
    <li>
      <a
        href={`#${id}`}  // Puedes ajustar el enlace según tu estructura de secciones
        className="text-primary-500 font-semibold cursor-pointer hover:text-primary-400"
        onClick={onClick}   // Llama a la función onClick proporcionada
      >
        {link}
      </a>
    </li>
  );
};

export default HeaderItem;

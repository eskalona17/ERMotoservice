import React from "react"

const HeaderItem = ({ id, link, onClick }) => {
  return (
    <li>
      <a
        href={`#${id}`} 
        className="text-primary-500 font-semibold cursor-pointer hover:text-primary-400 focus:outline-none"
        onClick={onClick}  
      >
        {link}
      </a>
    </li>
  )
}

export default HeaderItem

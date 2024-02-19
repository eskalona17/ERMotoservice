import React from "react"

const HeaderItem = ({ link }) => {
  return (
    <>
      <li className="text-primary-500 font-semibold cursor-pointer hover:text-primary-400">{link}</li>
    </>
  )
}

export default HeaderItem

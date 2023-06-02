import React, { useState } from 'react'
import { listItems } from '../../arritems'
import "../../assets/css/sidebar.css"
import { BsList, BsChevronRight } from "react-icons/bs";


const Sidebar = () => {
  const [active, setActive] = useState(0);
  const [expandBar, setExpandBar] = useState(false)

  return (
    <div className={` ${expandBar ? "expanded_sidebar" : "sidebar-main-container"} `}>
      <div className={` ${expandBar ? "expanded_sidebar" : ""} hamburgur`}
        onClick={
          () => setExpandBar(!expandBar)
        }>
        {expandBar ? <BsChevronRight /> : <BsList />}

      </div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}
            className="list_item"
            onClick={() => {
              setActive(index)
            }}>
            {active === index ?
              <div className='active_menu'>{item.icon} <BsChevronRight /></div>
              : item.icon}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
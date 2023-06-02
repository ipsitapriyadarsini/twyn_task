import React, { useState } from 'react'
import { listItems } from '../../arritems'
import "../../assets/css/sidebar.css"
import { BsList, BsChevronRight, BsChevronLeft } from "react-icons/bs";


const Sidebar = () => {
  const [active, setActive] = useState(0);
  const [expandBar, setExpandBar] = useState(false)

  return (
    <div className={` ${expandBar ? "expanded_sidebar" : "sidebar-main-container"} `}>
      <div className={`hamburgur ${expandBar && "expanded_burger"}`}
        onClick={
          () => setExpandBar(!expandBar)
        }>
        {expandBar ? <BsChevronLeft /> : <BsList />}

      </div>
      <ul className={expandBar && `list_menu`}>
        {listItems.map((item, index) => (
          <li key={index}
            className="list_item"
            onClick={() => {
              setActive(index)
            }}>
            {active === index ?
              <div className={`active_menu ${expandBar && "fixwidth"}`}>
                {expandBar && <span className='list__name'>{item.listName}</span>}
                {item.icon} <BsChevronRight />
              </div>
              : item.icon}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
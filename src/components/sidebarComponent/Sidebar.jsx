import React from 'react'
import { listItems } from '../../arritems'
import "../../assets/css/sidebar.css"



const Sidebar = () => {
  return (
    <div className='sidebar-main-container'>
      <ul>
        {listItems.map((item, index) => (
          <>
            <li key={index} className='list_item'>
              {item.icon}
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
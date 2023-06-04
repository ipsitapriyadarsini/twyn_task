import React from 'react'
import "../../assets/css/cards.css"

const ParentCard = ({ title, children }) => {
  return (
    <div className='parent-card-container '>
      <div className='display-flex'>
        <h1 className='card_label'>{title}</h1>
        <div className='horizontal__line'></div>
      </div>
      <div className='display-flex'>
        {children}
      </div>

    </div>
  )
}

export default ParentCard
import React from 'react'
import "../../assets/css/cards.css"

const Card = ({ title, children }) => {
  return (
    <div className='parent-card-container'>
    <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Card
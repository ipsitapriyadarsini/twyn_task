import React from 'react'
import "../../assets/css/cards.css"

const MiniCard = ({ children }) => {
    return (

        <>
            <div className="mini-card display-flex">
                <div>heloooo</div>
                <div></div>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}
export default MiniCard
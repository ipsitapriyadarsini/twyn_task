import React from 'react'


const Card = ({ children }) => {

    return (
        <div className="card-container">{children}</div>
    )
}

export default Card;

export const MiniCard = ({ children }) => {
    return (

        <>
            <div className="mini-card display-items-center">
                {children}
            </div>

        </>
    )
}
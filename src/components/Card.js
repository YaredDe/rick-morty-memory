import React from 'react'
import PropTypes from "prop-types";

import '../styles/Card.css'

export default function Card({
    handleClick,
    id,
    type,
    flipped,
    disabled,
    solved
})  {

    // Using "const" throws an error, I guees because of the change of values hehe
    var cardStatus
    if (flipped) {
        cardStatus = "card visible"
    } else if(solved) {
        cardStatus = "card visible solved"
        // solvedAnimation()
    } else {
        cardStatus = "card"
    }

    var cardSolved = solved ? <img className="portal-container" src="Assets/img/portal.png" /> : null

    return(
        
        <div className="card-container">
            {cardSolved}
            <div className={cardStatus} onClick={() => disabled ? null: handleClick(id)}>
            
                <div className={`card-face card-back`}>
                    <img className="card-back-image" src="Assets/img/back.png" />
                </div>
                <div className="card-face card-front">
                    <img className="card-front-image" src={type} />
                
                </div>
            </div>
        </div>
        
    )
    
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
}
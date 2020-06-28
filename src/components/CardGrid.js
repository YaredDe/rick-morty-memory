import React from 'react'
import PropTypes from "prop-types";

import Card from './Card'
import '../styles/CardGrid.css'

export default function CardGrid({ 
    cards,
    flipped,
    handleClick,
    solved,
    disabled
 }) {
    
    return(
        // When added the "onClick" on the grid suddenly the Card elements responded

        <div className="card-grid" >
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    flipped={flipped.includes(card.id)}
                    type={card.type}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id)}
                    solved={solved.includes(card.id)}
                />
            ))}
        </div>
    )
    
}

CardGrid.propTypes = {
    disabled: PropTypes.bool.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
  }

  
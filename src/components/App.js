import React, { useState, useEffect } from 'react'

import CardGrid from './CardGrid'
import {initializeDeck} from './handlers/DeckHandler'
import AudioHandler from './handlers/AudioHandler'
import '../styles/App.css'

export default function App() {
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [solved, setSolved] = useState([])
    const audioHandler = new AudioHandler()

    useEffect(() => {
        // setCards(initializeDeck())
        initializeDeck().then(setCards)
        audioHandler.startMusic()
      }, [])

    const handleClick = (id) => {
        setDisabled(true)
        if(flipped.length === 0) {
            setFlipped([id])
            setDisabled(false)
        } else {
            if(flipped.includes(id)) {
                // This solved the bug of not being able to select another card if clicking the same card twice
                setDisabled(false)
            } else {
                setFlipped([flipped[0], id])
                if(isMatch(id)) {
                    setSolved([...solved, flipped[0], id])
                    audioHandler.solved()
                    resetCards()
                } else {
                    setTimeout(resetCards, 1500)
                }
            } 
        }
    }


    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
      }

    const isMatch = id => {
        const clickedCard = cards.find(card => card.id === id)
        const flippedCard = cards.find(card => flipped[0] === card.id)
        return flippedCard.type === clickedCard.type
    }

    return(
        <div className="game-container">
            <CardGrid 
                cards={cards}
                handleClick={handleClick}
                flipped={flipped}
                disabled={disabled}
                solved={solved}

            />
        </div>
    )
    
}
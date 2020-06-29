import React, { useState, useEffect } from 'react'

import CardGrid from './CardGrid'
import ContextScreen from './ContextScreen'
import {initializeDeck} from './handlers/DeckHandler'
import AudioHandler from './handlers/AudioHandler'
import '../styles/App.css'

export default function App() {
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [solved, setSolved] = useState([])
    const [gameState, setGameState] = useState("")
    const [screenState, setScreenState] = useState(true)
    const audioHandler = new AudioHandler()

    useEffect(() => {
        // setCards(initializeDeck())
        setGameState("start")
        initializeDeck().then(setCards)
        audioHandler.startMusic()
      }, [])

    const cardClick = (id) => {
        setDisabled(true)
        if(flipped.length === 0) {
            setFlipped([id])
            audioHandler.flipped()
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
                    audioHandler.flipped()
                    setTimeout(resetCards, 1500)
                    setTimeout(audioHandler.flipped(), 1500)
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
                <ContextScreen gameState={gameState} />
                <CardGrid 
                    cards={cards}
                    handleClick={cardClick}
                    flipped={flipped}
                    disabled={disabled}
                    solved={solved}
                />
            </div>
       
    )
    
}
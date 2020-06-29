import React, { useState } from 'react'

import '../styles/ContextScreen.css'

export default function ContextScreen({ 
    gameState }) {
    // function classHandler() {
    //     if(gameState = "start") {
    //         return "start-screen"
    //     } else if(gameState = "victory") {
    //         return "victory-screen"
    //     } else if(gameState="over") {
    //         return "over-screen"
    //     } else {
    //         return "fade"
    //     }
    // }
    const [screen, setScreen] = useState(true)

    // var screenState = true

    const onClickHandle = (event) => {
        // event.preventDefault()
        // screenState = false
        setScreen(false)
        console.log(event)
    }

    // function screenStateHandler() {
    //     if(screenState = true) {
    //         return "overlay-text visible"
    //     } else {
    //         return "overlay-text"
    //     }
    // }

    function textHandler() {
        if(gameState = "start") {
            return "CLICK TO START"
        } else if(gameState = "victory") {
            return "Victory"
        } else if(gameState="over") {
            return "Game Over"
        } else {
            return
        }
    }

    return(
        <div className={screen ? "overlay-text visible": "overlay-text"} 
        onClick={onClickHandle}>
            {textHandler()}
        </div>
    )
}
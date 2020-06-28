class AudioHandler {
    constructor() {
        this.bgMusic = new Audio("Assets/audio/drumcell-vaporSleep.mp3")
        this.solvedSound = new Audio("Assets/audio/portal-gun.mp3")
        this.bgMusic.loop = true
        this.bgMusic.volume = 0.08
        this.solvedSound.volume = 0.1
    }
    startMusic() {
        this.bgMusic.play()
    }

    solved() {
        this.solvedSound.play()
    }
}

export default AudioHandler
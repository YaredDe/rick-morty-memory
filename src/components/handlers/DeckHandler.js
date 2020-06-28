import {getCharacters} from '../apis/characters'

function shuffle(array) {
    const _array = array.slice(0)
    for(let i = 0; i < array.length -1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }

    console.log(_array)
    return _array
}

export  const initializeDeck = async () => {
    let id = 0
    const characterCards = await getCharacters()
    var cards = []
    cards = characterCards.map(element => [...cards, element.image])
    // este bb aplana el arreglo ooh sí
    cards = [].concat.apply([], cards)
        .reduce((acc, type) => {
            acc.push({
                id: id++,
                type
            })
            acc.push({
                id: id++,
                type
            })
            return acc
        }, [])

        console.log(cards)
        return shuffle(cards)
}
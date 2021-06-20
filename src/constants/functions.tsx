export const emptySpaces = (phrase: string, initialPosition: number) => {
    let countedEmptySpaces = 0
    while (phrase[initialPosition + countedEmptySpaces] === ' ' || phrase[initialPosition + countedEmptySpaces] === '\n') {
        if (phrase[initialPosition + countedEmptySpaces] === undefined)
            return 0
        else
            countedEmptySpaces++
    }
    return countedEmptySpaces
}

export const wordLength = (phrase: string, initialPosition: number) => {
    let position = 0
    let countedEmptySpaces = emptySpaces(phrase, initialPosition)
    const positionAfterSpaces = initialPosition + countedEmptySpaces
    while (phrase[position + positionAfterSpaces] !== ' ' && phrase[position + positionAfterSpaces] !== '\n'
        && phrase[position + positionAfterSpaces] !== undefined) {
        position++
    }
    return position
}

export const nextWordFirstPosition = (phrase: string, initialPosition: number) => {
    let position = initialPosition
    while (phrase[position] !== ' ' && phrase[position] !== '\n' && phrase[position] !== undefined) {
        position++
    }
    return position + emptySpaces(phrase, position) + 1
}

export const compareWords = (samplePhrase: string, userTypedPhrase: string, initialPosition: number) => {
    let position
    const length = wordLength(samplePhrase, initialPosition)
    for (position = initialPosition; position < length; position++)
        if (samplePhrase[position] !== userTypedPhrase[position])
            return false
    return true
}

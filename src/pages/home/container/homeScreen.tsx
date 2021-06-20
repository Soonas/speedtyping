import { useEffect, useState } from 'react'
import { wordLength, nextWordFirstPosition, compareWords } from '../../../constants/functions'
import { samples } from '../../../constants/samples'
import { Home } from '../components/home'

export const HomeScreen = () => {

    const [rightWords, setRightWords] = useState<number>(0)
    const [wrongWords, setWrongWords] = useState<number>(0)
    const [acuracy, setAcuracy] = useState<number>(0)
    const [wpm, setWpm] = useState<number>(0)
    // const [formDisabled, setFormDisabled] = useState<boolean>(true)
    // const [elapsedTime, setElapsedTime] = useState<number>(0)
    // const [parsedElapsedTime, setParsedElapsedTime] = useState<string>('00:00')

    const calculateGrossWpm = (allTypedEntries: number, timeMin: number) => {
        return (allTypedEntries / 5) / timeMin
    }

    const calculateNetWpm = (uncorrectedErrors: number, allTypedEntries: number, timeMin: number) => {
        setWpm(calculateGrossWpm(allTypedEntries, timeMin) - (uncorrectedErrors / timeMin))
    }

    const calculateAcuracy = (correctEntries: number, totalEntries: number) => {
        setAcuracy(correctEntries / totalEntries)
    }

    const avaluateEntry = (samplePhrase: string, userTypedPhrase: string) => {
        let position = 0
        while (samplePhrase[position] !== undefined) {
            if (compareWords(samplePhrase, userTypedPhrase, position)) {
                console.log(true)
                setRightWords(rightWords + 1)
            }
            else {
                setWrongWords(wrongWords + 1)
            }
            position += nextWordFirstPosition(samplePhrase, position)
        }
    }

    const calculateResult = (samplePhrase: string, userTypedPhrase: string) => {
        const totalEntries = rightWords + wrongWords
        avaluateEntry(samplePhrase, userTypedPhrase)
        calculateAcuracy(rightWords, totalEntries)
        calculateNetWpm(wrongWords, totalEntries, 1)
    }

    useEffect(() => {
        const fraseA = '123456 123456789'
        const fraseB = '123456 123456789'
        calculateResult(fraseA, fraseB)
    }, [])


    return <Home
        phrase={samples[0]}
        rightWords={rightWords}
        wrongWords={wrongWords}
        acuracy={acuracy}
        wpm={wpm}
    />

}
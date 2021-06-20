import { useEffect, useState } from 'react'
import { wordLength, nextWordFirstPosition, compareWords } from '../../../constants/functions'
import { samples } from '../../../constants/samples'
import { Home } from '../components/home'

export const HomeScreen = () => {

    const [rightWords, setRightWords] = useState<boolean[]>([])
    const [wrongWords, setWrongWords] = useState<boolean[]>([])
    // const [acuracy, setAcuracy] = useState<string[]>([])
    // const [formDisabled, setFormDisabled] = useState<boolean>(true)
    // const [elapsedTime, setElapsedTime] = useState<number>(0)
    // const [parsedElapsedTime, setParsedElapsedTime] = useState<string>('00:00')

    const calculateGrossWpm = (allTypedEntries: number, timeMin: number) => {
        return (allTypedEntries / 5) / timeMin
    }

    const calculateNetWpm = (uncorrectedErrors: number, allTypedEntries: number, timeMin: number) => {
        return calculateGrossWpm(allTypedEntries, timeMin) - (uncorrectedErrors / timeMin)
    }

    const calculateAcuracy = (correctEntries: number, totalEntries: number) => {
        return correctEntries / totalEntries
    }

    const avaluateEntry = (samplePhrase: string, userTypedWord: string) => {
        let position = 0
        while (samplePhrase[position] != undefined){
            if(compareWords(samplePhrase,userTypedWord,position))
            rightWords.push
        }
    }

    const calculateResult = () => {
        //Calcula acuracia

        //Calcula NetWpm

    }

    useEffect(() => {
        const fraseA = '123456 123456789'
        const fraseB = '123456 123456789'
        console.log(compareWords(fraseA, fraseB, 0))
    }, [])


    return <Home
        phrase={samples[0]}
    />

}
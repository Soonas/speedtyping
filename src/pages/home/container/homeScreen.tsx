import moment from 'moment'
import { useEffect, useState } from 'react'
import { compareWords, nextWordFirstPosition } from '../../../constants/functions'
import { SAMPLE_ONE } from '../../../constants/samples'
import { Home } from '../components/home'

export const HomeScreen = () => {

    const [disableForm, setDisableForm] = useState<boolean>(true)
    const [coutingTime, setCoutingTime] = useState<boolean>(false)
    const [rightWords, setRightWords] = useState<number>(0)
    const [wrongWords, setWrongWords] = useState<number>(0)
    const [acuracy, setAcuracy] = useState<number>(0)
    const [wpm, setWpm] = useState<number>(0)
    const [entry, setEntry] = useState<string>('')
    const [elapsedTime, setElapsedTime] = useState<number>(0)
    const [parsedElapsedTime, setParsedElapsedTime] = useState<string>('00:00')

    useEffect(() => {
        if (entry.length === 0) {
            setAcuracy(0)
            setWpm(0)
        }
        else
            calculateResult(SAMPLE_ONE, entry)
    }, [entry])

    useEffect(() => {
        defineTimeAcurrency()
        // eslint-disable-next-line
    }, [elapsedTime])

    const calculateGrossWpm = (allTypedEntries: number, timeMin: number) => {
        return (allTypedEntries / 5) / timeMin
    }

    const calculateNetWpm = (uncorrectedErrors: number, allTypedEntries: number, timeMin: number) => {
        setWpm(calculateGrossWpm(allTypedEntries, timeMin) - (uncorrectedErrors / timeMin))
    }

    const calculateAcuracy = (correctEntries: number, totalEntries: number) => {
        setAcuracy(100 * correctEntries / totalEntries)
    }

    const avaluateEntry = (samplePhrase: string, userTypedPhrase: string) => {
        let position = 0
        while (samplePhrase[position] !== undefined) {
            if (compareWords(samplePhrase, userTypedPhrase, position)) {
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

    const definirEntry = (entry: string) => {
        setEntry(entry)
    }

    const startStopWatch = () => {
        if (!coutingTime) {
            setDisableForm(false)
            setInterval(() => {
                setElapsedTime((timer) => timer + 1)
            }, 1000)
            setCoutingTime(true)
        }
    }

    const defineTimeAcurrency = () => {
        const timeCall = moment.utc(elapsedTime * 1000).format("HH:mm:ss")
        setParsedElapsedTime(timeCall)
    }

    return <Home
        phrase={SAMPLE_ONE}
        acuracy={acuracy}
        wpm={wpm}
        entry={entry}
        elapsedTime={parsedElapsedTime}
        disableForm={disableForm}

        definirEntry={definirEntry}
        startClock={startStopWatch}
    />

}
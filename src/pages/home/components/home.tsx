import { Classes } from "./style"
interface HomeProps {
    phrase: string
    acuracy: number
    wpm: number
    entry: string
    elapsedTime: string
    disableForm: boolean

    definirEntry: (entry: string) => void
    startClock: () => void
}

export const Home = ({ phrase, acuracy, wpm, entry, elapsedTime, disableForm, definirEntry, startClock }: HomeProps) => {
    return <>
        <div className="container mb-5 mb-5">
            <div className="row">
                <div className="border rounder p-3 mb-4">
                    The typing speed will be measured, you will have to read the text thatwill be presented and type it in the field below, with button "Start test".
                    <div className="border rounder p-3 mb-4">
                        {phrase}
                    </div>
                    <textarea
                        disabled={disableForm}
                        className="form-control mb-3"
                        placeholder="Start typing..."
                        value={entry}
                        onChange={(event) => { definirEntry(event.target.value) }}
                    ></textarea>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        < div >
                            <div>
                                Time: {elapsedTime}
                            </div>
                            <div>
                                Accuracy: {acuracy} %
                            </div>
                            <div>
                                Speed: {wpm}
                            </div>
                        </div>

                    </div>
                    <div style={Classes.buttonDiv} className="text-right">
                        <button onClick={startClock} className="btn btn-light" >Start Test</button>
                    </div>

                </div>
            </div>
        </div>
    </>
}
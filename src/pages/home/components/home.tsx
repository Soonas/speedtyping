
interface HomeProps {
    phrase: string
}

export const Home = ({ phrase }: HomeProps) => {
    return <>
        <div className="container mb-5 mb-5">
            <div className="row">
                <div className="border rounder p-3 mb-4">
                        The typing speed will be measured, you will have to read the text thatwill be presented and type it in the field below, with button "Start test".
                    <div className="border rounder p-3 mb-4">
                        {phrase}
                    </div>
                    <textarea
                        className="form-control mb-3"
                        placeholder="Start typing..."
                    ></textarea>
                    <div className="text-right">
                        <button className="btn btn-light">Start Test</button> 
                    </div>
                </div>
            </div>
        </div>
    </>
}
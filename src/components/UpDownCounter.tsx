import { useState } from "react"
import "./UpDownCounter.css"


export function UpDownCounter() {
    const [ buttonCount, setButtonCount ] = useState(0);

    function countUp() {
        setButtonCount(prevCount => prevCount + 1);
    }

    function countDown() {
        setButtonCount(prevCount => prevCount - 1);
    }

    return (
        <div className="counterThing">
            <button onClick={countUp}>Up</button>
            <span>{buttonCount}</span>
            <button onClick={countDown}>Down</button>
        </div>
    )
}
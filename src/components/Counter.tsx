import { useState } from "react"
import './Counter.scss'

export function Counter() {
    const [state, setState] = useState(0)

    return <div className="counter">{state}
        <div><button className="btn" onClick={() => setState(state + 1)}>inc</button></div>
     </div>
}
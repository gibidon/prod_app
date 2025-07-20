import { useState } from "react"
import cls from './Counter.module.scss'

export function Counter() {
    const [state, setState] = useState(0)

    return <div className={cls.btn}>{state}
        <div><button className={cls.btn} onClick={() => setState(state + 1)}>inc</button></div>
     </div>
}
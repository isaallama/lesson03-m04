import { useState } from "react"
import './counter.css'

function Counter() {
    const [count, setCount] = useState(0);


    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <h3>{count}</h3>
            <div className="button-group">
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
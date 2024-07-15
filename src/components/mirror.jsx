import { useState } from "react"
import './mirror.css'

function Mirror() {
    const [text, setText] = useState('');

    return (
        <div className="mirror-container">  
            <h1>Mirror</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}         
                placeholder="Type here..."  
            />
            <p>You wrote: {text}</p>
        </div>
    )

}

export default Mirror
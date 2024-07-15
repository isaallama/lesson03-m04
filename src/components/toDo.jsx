import { useState } from "react"
import './toDo.css'

function ToDoList() {
    const [toDos, setToDos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addToDo = () => {
        setToDos([...toDos, inputValue])
        setInputValue('')
    }

    const deleteToDo = (indexToDelete) => {
        setToDos(toDos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="toDo-container">
            <h1>To Do List</h1>
            <div className="input-container">
            <input type="text" id="input-toDo" onChange={(e) => setInputValue(e.target.value)} />
            <button id="button-toDo" onClick={addToDo}>Add</button>
            </div>
            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index}>
                        {toDo}
                        <button id="delete-toDo" onClick={() => deleteToDo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ToDoList
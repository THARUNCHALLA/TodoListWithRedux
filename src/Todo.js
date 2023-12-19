import { useState } from "react"
import { useDispatch } from "react-redux"
import {add} from "./Action"

const Todo = () => {
    const [Data, setData] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <h1 className="heading">Todo App using React & Redux</h1>
            <div className="container">
                <input type="text" placeholder="Enter Todo Name" name="Todo" className="input" value={Data} onChange={(e) => setData(e.target.value)} />
                <button className="button" onClick={() => {
                    if (Data !== "") {
                        dispatch(add(Data))
                        setData("")
                    }
                }}>Add</button>
            </div>
        </div>
    )
}


export default Todo
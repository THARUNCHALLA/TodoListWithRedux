import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {delete1} from "./Action"

const TodoItem = (props) => {
    const [final, setfinal] = useState(true)
    const { user } = props
    const { name,id } = user
    const [value,setvalue] = useState(name)

    const dispatch = useDispatch()

    const change=(e)=>{
        setvalue(e.target.value)
    }
    const tharun = (name) => {
        setvalue(value)
        setfinal(false)
    }

    const tharun2 = () => {
        setvalue(value)
        setfinal(true)
    }
    return (
        <>
            {final ? <div className="Container">
                <h1 className="TodoHeading">{value}</h1>
                <div className="InsideContainer">
                    <button className="button1" onClick={()=>tharun(name)}>Edit</button>
                    <VscChromeClose className="Tharun" onClick={()=>(
                        dispatch(delete1(id))
                    )}/>
                </div>
            </div> :
                <div className="container">
                    <input type="text" name="AddTodo" className="input" value={value} onChange={change}/>
                    <button className="button2" onClick={tharun2}>Save</button>
                </div>
            }
        </>
    )
}

export default TodoItem
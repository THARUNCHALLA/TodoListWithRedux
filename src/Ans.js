import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const Ans = () => {
    const data = useSelector((s) => { return s })
    return (
        <div>
            {data.map(each => <TodoItem key={each.id} user={each} />
            )
            }
        </div>
    )
}

export default Ans
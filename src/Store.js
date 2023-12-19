import { createStore } from "redux"

const initial = [{name:"Learn Html",id:1},{name:"Learn CSS",id:2}]

function Myapplication(state=initial,action){
        if (action.type==="add"){
            return [...state,action.payload]
        }
        else if(action.type==="delete"){
            const UpdatedData = state.filter(each=>each.id!==action.payload)
            return [...UpdatedData]
        }
        return state
}

const store = createStore(Myapplication)

export default store

export const add = (Data)=> ({ type: "add", payload: { name: Data, id: new Date().getTime().toString() } })
export const delete1 = (id)=>({type:"delete",payload:id})
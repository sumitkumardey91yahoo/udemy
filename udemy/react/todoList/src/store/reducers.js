export const reducers = (state, action) => {
    let newD =  { ...state }
    switch(action.type) {
        case "todoData": 
         newD.todoList.push(action.payload)
         break;
         default: 
         
    }
         
       return newD;
}
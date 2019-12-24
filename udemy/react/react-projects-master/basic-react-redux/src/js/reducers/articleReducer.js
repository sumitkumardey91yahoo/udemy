import { ADD_ARTICLE } from "../constants/action-types";

// Reducer to add article
const articleReducer = (state = {
    articles: [],
    sumit: ''
}, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_ARTICLE:
           
            state[].articles.push(action.payload)
            return [state];
        case "sumit-kumar-dey": 
            state.sumit = action.payload
            return state;    
        default:
            return state;
    }
}

export default articleReducer;
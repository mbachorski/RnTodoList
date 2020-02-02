import {ADD, GET} from "../actions/todosActions";


const INITIAL_STATE = {items: list()}

function list() {
    const list = []
    for (let i = 0; i < 2; i++) {
        list[i] = {
            key: i,
            text: 'TodoItem ' + i,
            checked: false,
        }
    }
    return list
}


const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            return {items: [...state.items, action.payload]}
        case GET:
            return state
        default:
            return state
    }
    // console.log('todosReducer returning: ', state)
}

export default todosReducer

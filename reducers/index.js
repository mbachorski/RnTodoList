import {combineReducers} from 'redux'
import {LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD} from '../actions/user'
import todosReducer from "./todosReducer";

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload || state
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return {...state, email: action.payload}
        case UPDATE_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user, todosReducer
})

export default rootReducer

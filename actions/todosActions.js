import Firebase, {db} from '../config/Firebase.js'
import {UPDATE_EMAIL} from "./user";

// define types
export const ADD = 'ADD_TODO'
export const GET = 'GET_TODOS'

export const addItem = item => {
    return {
        type: ADD,
        payload: item
    }
}

// // actions
// export const getTodos = uid => {
//     return async (dispatch, getState) => {
//         try {
//             const todos = await db
//                 .collection('todo_lists')
//                 .doc('grocery')
//                 .collection('items')
//                 .get()
//
//             dispatch({type: GET, payload: todos.data()})
//         } catch (e) {
//             alert(e)
//         }
//     }
// }
//
// export const addTodoItem = (item) => {
//     return async (dispatch, getState) => {
//         try {
//             await db.collection('todo_lists')
//                 .doc('grocery')
//                 .collection('items')
//                 .add(item)
//
//             console.log('aaaaaa', response)
//             dispatch({type: ADD, payload: user})
//
//         } catch (e) {
//             alert(e)
//         }
//     }
// }

import {load} from "redux-localstorage-simple";
import {TODO_ADD, TODO_TOGGLE, TODO_ARCHIVE, TODO_DELETE} from "../actionTypes";

const genId = () => Math.random().toString(36).substr(2, 9);

let initialState = load({namespace: 'todo-list'});

if (!initialState || !initialState.todos || !initialState.todos.length) {
    initialState = {todos: []}
}

const todos = (state = initialState.todos, {type, payload}) => {
    switch (type) {
        case TODO_ADD:
            return [
                ...state,
                {
                    id: genId(),
                    text: payload,
                    completed: false,
                    archived: false
                }
            ]
        case TODO_TOGGLE:
            return state.map(todo =>
                todo.id === payload ? { ...todo, completed: !todo.completed } : todo
            )
        case TODO_ARCHIVE:
            return state.map(todo =>
                todo.id === payload ? { ...todo, archived: !todo.archived } : todo
            )
        case TODO_DELETE:
            return state.filter(todo => todo.id !== payload)
        default:
            return state
    }
};

export default todos;
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    1: {
        id: 1,
        title: "wash hoku",
        body: "gentle soap",
        done: false
    },

    2: {
        id: 2,
        title: "make yaely tea",
        body: "peach",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach( todo => {
                nextState[todo.id] = todo
            });
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo
            return nextState;
        case REMOVE_TODO:
            delete(nextState[action.todo.id])
            return nextState
        default:
            return state;
    }
}


export default todosReducer;
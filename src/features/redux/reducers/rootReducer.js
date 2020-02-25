import types from '../constants'

const initialData = [];

export const rootReducer = (state = initialData, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_ALL: {
            return payload
        }
        case types.ADD: {
            return [
                ...state,
                Object.assign({}, payload.body)
            ]
        }
        case types.TOGGLE: {
            const todos = state.map((todo) => {
                if (todo._id === payload._id) {
                    return Object.assign({}, todo, { toggle: !todo.toggle });
                }
                return todo;
            });
            return todos
        }
        case types.UPDATE: {
            const todos = state.map((todo) => {
                if (todo._id === payload.body._id) {
                    return Object.assign({}, todo, { text: payload.body.text });
                }
                return todo;
            });
            return todos
        }
        case types.REMOVE: {
            return state.filter((todo) => todo._id !== payload.id)
        }
        default:
            return state;
    }
};
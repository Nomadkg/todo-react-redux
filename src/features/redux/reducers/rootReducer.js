import types from '../constants'

const initialData = [];

const rootReducer = (state = initialData, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_ALL: {
            return payload;
        }

        case types.ADD: {
            return [
                ...state,
                state = payload
            ]
        }

        case types.TOGGLE: {
            return state.map((todo) => {
                return todo._id === payload._id ? {...todo, toggle: !todo.toggle} : todo
            });
        }

        case types.UPDATE: {
            return state.map((todo) => {
                return todo._id === payload._id ? {...todo, text: payload.text} : todo
            });
        }

        case types.REMOVE: {
            return state.filter((todo) => todo._id !== payload.id)
        }

        default: return state;
    }
};

export default rootReducer;
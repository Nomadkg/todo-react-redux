import types from '../constants'
import TodoService from '../../services'
// Helper functions to dispatch actions, optionally with payloads

const getTodoList = (todos) => {
    return {
        type: types.GET_ALL,
        payload: todos
    }
};

const createTodo = (todo) => {
    return {
        type: types.ADD,
        payload: todo
    }
};

const changeState = (todo) => {
    return {
        type: types.TOGGLE,
        payload: todo
    }
};

const updateTodo = (todo) => {
    return {
        type: types.UPDATE,
        payload: todo
    }
};

const removeTodo = (data) => {
    return {
        type: types.REMOVE,
        payload: data
    }
};

export const actionCreators = {
    getAll: () => {
        return (dispatch) => {
            return TodoService.getAll()
                .then((res) => {
                    dispatch(getTodoList(res.data));
                })
                .catch((error) => {
                    console.log('Cannot fetch', error)
                })
        }
    },
    add: (todo) => {
        return (dispatch) => {
            return TodoService.add(todo)
                .then((res) =>
                    dispatch(createTodo(res.data))
                )
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    toggle: (id) => {
        return (dispatch) => {
            return TodoService.toggle(id)
                .then((res) => {
                    dispatch(changeState(res.data));
                })
                .catch((error) => {
                    console.log('Cannot toggle', error)
                })
        }
    },
    update: (id, text) => {
        return (dispatch) => {
            return TodoService.update(id, text)
                .then((res) => {
                    dispatch(updateTodo(res.data));
                })
                .catch((error)=> {
                    console.log('Cannot update', error)
                })
        }
    },
    remove: (id) => {
        return dispatch => {
            return TodoService.remove(id)
                .then((res) => {
                    dispatch(removeTodo(res.data));
                })
                .catch((error) => {
                    console.log('Cannot remove', error)
                })
        }
    }
};
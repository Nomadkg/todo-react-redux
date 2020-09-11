import types from "../constants";
// Helper functions to dispatch actions, optionally with payloads

const loadTodos = () => {
    return {
        type: types.LOAD,
    };
};

const loadTodosSuccess = (data) => {
    return {
        type: types.LOAD_SUCCESS,
        payload: data,
    };
};

const loadTodosFailure = (data) => {
    return {
        type: types.LOAD_FAILURE,
        payload: data,
    };
};

const add = (todo) => {
    return {
        type: types.ADD,
        payload: todo,
    };
};

const addTodoSuccess = (todo) => {
    return {
        type: types.ADD_SUCCESS,
        payload: todo,
    };
};

const addTodoFailure = (data) => {
    return {
        type: types.ADD_FAILURE,
        payload: data,
    };
};

const toggle = (todo) => {
    return {
        type: types.TOGGLE,
        payload: todo,
    };
};

const toggleTodoSuccess = (todo) => {
    return {
        type: types.TOGGLE_SUCCESS,
        payload: todo,
    };
};

const toggleTodoFailure = (data) => {
    return {
        type: types.TOGGLE_FAILURE,
        payload: data,
    };
};

const update = (id, text) => {
    return {
        type: types.UPDATE,
        payload: { id, text },
    };
};

const updateTodoSuccess = (todo) => {
    return {
        type: types.UPDATE_SUCCESS,
        payload: todo,
    };
};

const updateTodoFailure = (data) => {
    return {
        type: types.UPDATE_FAILURE,
        payload: data,
    };
};

const remove = (data) => {
    return {
        type: types.REMOVE,
        payload: data,
    };
};

const removeTodoSuccess = (data) => {
    return {
        type: types.REMOVE_SUCCESS,
        payload: data,
    };
};

const removeTodoFailure = (data) => {
    return {
        type: types.REMOVE_FAILURE,
        payload: data,
    };
};

export {
    loadTodos,
    loadTodosSuccess,
    loadTodosFailure,
    add,
    addTodoSuccess,
    addTodoFailure,
    toggle,
    toggleTodoSuccess,
    toggleTodoFailure,
    update,
    updateTodoSuccess,
    updateTodoFailure,
    remove,
    removeTodoSuccess,
    removeTodoFailure,
};

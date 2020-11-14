import {
    loadTodos,
    loadTodosSuccess,
    loadTodosFailure,

    addTodo,
    addTodoSuccess,
    addTodoFailure,

    toggleTodo,
    toggleTodoSuccess,
    toggleTodoFailure,

    updateTodo,
    updateTodoSuccess,
    updateTodoFailure,

    removeTodo,
    removeTodoSuccess,
    removeTodoFailure
} from "../actions";

import TodoService from "../../services";

const load = () => async (dispatch) => {
    dispatch(loadTodos());

    try {
        const response = await TodoService.getAll();
        dispatch(loadTodosSuccess(response.todo));
    } catch (error) {
        dispatch(loadTodosFailure(error));
    }
};

const add = (todo) => async (dispatch) => {
    dispatch(addTodo());

    try {
        const response = await TodoService.add(todo);
        dispatch(addTodoSuccess(response.todo));
    } catch (error) {
        dispatch(addTodoFailure(error));
    }
};

const remove = (id) => async (dispatch) => {
    dispatch(removeTodo());

    try {
        const response = await TodoService.remove(id);
        dispatch(removeTodoSuccess(response));
    } catch (error) {
        dispatch(removeTodoFailure(error));
    }
};

const toggle = (id) => async (dispatch) => {
    dispatch(toggleTodo());

    try {
        const response = await TodoService.toggle(id);
        dispatch(toggleTodoSuccess(response.todo));
    } catch (error) {
        dispatch(toggleTodoFailure(error));
    }
};

const update = (id, text) => async (dispatch) => {
    dispatch(updateTodo());

    try {
        const response = await TodoService.update(id, text);
        dispatch(updateTodoSuccess(response.todo));
    } catch (error) {
        dispatch(updateTodoFailure(error));
    }
};


export {
    load,
    add,
    toggle,
    update,
    remove
};
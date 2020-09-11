import { call, put, takeLatest } from "redux-saga/effects";

import { toggleTodoFailure, toggleTodoSuccess } from "../actions";
import TodoService from "../../services";
import types from "../constants";

/** saga worker that is responsible for the side effect, when watcher saga sees the actions */
function* workerToggleTodo(action) {
    try {
        const { data } = yield call(TodoService.toggle, action.payload);
        // dispatch action to change redux state
        yield put(toggleTodoSuccess(data.todo));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(toggleTodoFailure(err));
        console.log(err);
    }
}

/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherToggleTodo() {
    yield takeLatest(types.TOGGLE, workerToggleTodo);
}

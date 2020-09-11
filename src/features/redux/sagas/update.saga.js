import { call, put, takeLatest } from "redux-saga/effects";

import { updateTodoFailure, updateTodoSuccess } from "../actions";
import TodoService from "../../services";
import types from "../constants";

/** saga worker that is responsible for the side effect, when watcher saga sees the actions */
function* workerUpdateTodo(action) {
    try {
        const { data } = yield call(TodoService.update, action.payload);
        // dispatch action to change redux state
        yield put(updateTodoSuccess(data.todo));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(updateTodoFailure(err));
        console.log(err);
    }
}

/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherUpdateTodo() {
    yield takeLatest(types.UPDATE, workerUpdateTodo);
}

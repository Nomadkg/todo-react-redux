import { call, put, takeLatest } from "redux-saga/effects";

import { removeTodoFailure, removeTodoSuccess } from "../actions";
import TodoService from "../../services";
import types from "../constants";

/** saga worker that is responsible for the side effect, when watcher saga sees the actions */
function* workerRemoveTodo(action) {
    try {
        const { data } = yield call(TodoService.remove, action.payload);
        // dispatch action to change redux state
        yield put(removeTodoSuccess(data));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(removeTodoFailure(err));
        console.log(err);
    }
}

/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherRemoveTodo() {
    yield takeLatest(types.REMOVE, workerRemoveTodo);
}

import { takeLatest, call, put } from "redux-saga/effects";

import { loadTodosSuccess, loadTodosFailure } from "../actions";
import TodoService from "../../services";
import types from "../constants";

function* workerLoadTodos() {
    /** function that makes the api request (axios call) and returns a Promise for response */
    try {
        const { data } = yield call(TodoService.getAll);
        // dispatch action to change redux state
        yield put(loadTodosSuccess(data.todo));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(loadTodosFailure(err));
        console.log(err);
    }
}

/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherLoadTodos() {
    yield takeLatest(types.LOAD, workerLoadTodos);
}

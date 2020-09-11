import { call, put, takeLatest } from "redux-saga/effects";

import { addTodoFailure, addTodoSuccess } from "../actions";
import TodoService from "../../services";
import types from "../constants";

/** saga worker that is responsible for the side effect, when watcher saga sees the actions */
function* workerCreateTodo(action) {
    try {
        const { data } = yield call(TodoService.add, action.payload);
        // dispatch action to change redux state
        yield put(addTodoSuccess(data.todo));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(addTodoFailure(err));
        console.log(err);
    }
}

/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherCreateTodo() {
    yield takeLatest(types.ADD, workerCreateTodo);
}

import { all } from "redux-saga/effects";

import { watcherLoadTodos } from "./load.saga";
import { watcherCreateTodo } from "./create.saga";
import { watcherRemoveTodo } from "./remove.saga";
import { watcherToggleTodo } from "./toggle.saga";
import { watcherUpdateTodo } from "./update.saga";

export default function* rootSaga() {
    yield all([
        watcherLoadTodos(),
        watcherCreateTodo(),
        watcherRemoveTodo(),
        watcherToggleTodo(),
        watcherUpdateTodo(),
        // add other watchers to the array
    ]);
}

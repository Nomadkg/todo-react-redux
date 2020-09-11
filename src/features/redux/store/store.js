import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();
/** Create middlewares for redux */
let middlewares = applyMiddleware(sagaMiddleware);

const Store = createStore(rootReducer, compose(middlewares));

sagaMiddleware.run(rootSaga);

export default Store;

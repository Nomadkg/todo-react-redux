import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './app/app'
import todoReducer from './features/redux/reducers'
import Store from "./features/redux/store";

const store = Store(todoReducer);

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


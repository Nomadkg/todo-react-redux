import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './app'
import Store from './features/redux/store'

const store = Store();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
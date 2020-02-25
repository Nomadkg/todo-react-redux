import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './app'
import { actionCreators } from './features/redux/actions'
import Store from './features/redux/store'
import * as serviceWorker from './registerServiceWorker';

const store = Store();
store.dispatch(actionCreators.getAll());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
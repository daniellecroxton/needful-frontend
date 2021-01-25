import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import userReducer from './reducers/userReducer'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
 <Provider store={store}>
     <Router>
        <App />
     </Router>
 </Provider>
, document.getElementById('root'));



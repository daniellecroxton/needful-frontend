import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import userReducer from './reducers/userReducer'
import itemReducer from './reducers/itemReducer'
import loadingReducer from './reducers/loadingReducer'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

const rootReducer = combineReducers({
    users: userReducer,
    items: itemReducer,
    loading: loadingReducer
  })

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
 <Provider store={store}>
     <Router>
        <App />
     </Router>
 </Provider>
, document.getElementById('root'));

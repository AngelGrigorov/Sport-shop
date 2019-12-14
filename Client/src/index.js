import React from 'react'
import ReactDOM from 'react-dom'
import './style/site.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import '../node_modules/toastr/build/toastr.min.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter} from 'react-router-dom'
import reducers from './reducers'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk, createLogger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

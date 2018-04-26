import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import tweetsReducer from './store/reducer/tweetsReducer'
import tweetFormReducer from './store/reducer/tweetFormReducer'

// const store = createStore(configureStore)

const rootReducer = combineReducers({
  tweetReducer: tweetsReducer,
  tweetsFormReducer: tweetFormReducer
})

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, enhancedCompose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><Route component={App} /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

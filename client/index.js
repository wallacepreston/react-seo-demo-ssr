
import React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'

// import '../public/index.css';
import configureStore from './store'
import Root from './components/root'

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state)

hydrate(
  <Provider store={store} >
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('app')
)

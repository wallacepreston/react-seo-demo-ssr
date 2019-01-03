import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import Root from '../views/components/root'
import configureStore from '../views/store'
module.exports = function (initialState, url = '/') {
  // Model the initial state
  const store = configureStore(initialState)
  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={url} context ={{}}>
        <Root />
      </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState()
  return {content, preloadedState};
}

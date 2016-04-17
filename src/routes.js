import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

/*----------------------------------------------------------------------------*/

import App from 'components/App'
import Views from 'components/Views'
import { CaseFacets, FileFacets } from 'components/Facets'

import reducers from 'dux'

let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  applyMiddleware(
    routerMiddleware(browserHistory),
    thunk
  )
)

let history = syncHistoryWithStore(browserHistory, store)

export default
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path='/' component={Views.Files}>
          <IndexRedirect to='cases' />
          <Route path='cases' component={CaseFacets} />
          <Route path='files' component={FileFacets} />
        </Route>
        <Route path='annotations' component={Views.Annotations} />
      </Route>
    </Router>
  </Provider>

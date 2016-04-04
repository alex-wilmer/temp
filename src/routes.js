import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

/*----------------------------------------------------------------------------*/

import App from 'components/App'
import Views from 'components/Views'

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

// let requireAuth = (nextState, replace) => !auth.loggedIn() && replace(`/`)

export default
  <Provider store={ store }>
    <Router history={ history }>
      <Route component={ App }>
        <Route path="/" component={ Views.Home } />
        {/*<Route path="/projects" component={ Views.Projects } />*/}
        {/*<Route path="/search" component={ Views.Search } />*/}
        {/*<Route path="/reports" component={ Views.Reports } />*/}
        {/*<Route path="/annotations" component={ Views.Annotations } />*/}
        {/*<Route path="/case" component={ Views.Case } />*/}
        {/*<Route path="/file" component={ Views.File } />*/}
      </Route>
    </Router>
  </Provider>

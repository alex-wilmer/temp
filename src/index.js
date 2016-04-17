import 'babel-polyfill'

/*----------------------------------------------------------------------------*/

import theme from 'theme'
import { StyleSheet } from 'react-look'

let background = {
  width: `100%`,
  height: `100%`,
  margin: 0,
  backgroundColor: theme.greyScale5,
}

StyleSheet.addCSS({
  html: {
    ...background,
    fontSize: `10px`,
  },
  '#root': background,
  '#app': background,
  body: {
    ...background,
    fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
    fontSize: `14px`,
  },
  '*': {
    boxSizing: `border-box !important`,
    outline: `none !important`,
  },
  a: {
    color: theme.primary,
    textDecoration: `none`,
    cursor: `pointer`,
  },
})

/*----------------------------------------------------------------------------*/

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

/*----------------------------------------------------------------------------*/

import { render } from 'react-dom'
import routes from './routes'

/*----------------------------------------------------------------------------*/

render(routes, document.getElementById(`root`))

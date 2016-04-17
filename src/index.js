import 'babel-polyfill'

/*----------------------------------------------------------------------------*/

import 'theme/global'

/*----------------------------------------------------------------------------*/

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

/*----------------------------------------------------------------------------*/

import { render } from 'react-dom'
import routes from './routes'

/*----------------------------------------------------------------------------*/

render(routes, document.getElementById(`root`))

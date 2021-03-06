import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider }    from 'react-redux'

import App from './containers/App'

require('dotenv').config()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

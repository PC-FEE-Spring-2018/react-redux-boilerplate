import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css/normalize.css'
import 'semantic-ui-css/semantic.css'

import store from './services/store'

import {Provider} from 'react-redux'

const Project = (props) => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Project />, document.getElementById('root'))
registerServiceWorker()

import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import image from 'resources/images/fox.jpg'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Hello World</h1>
          <img src={image} alt="Cute Fox" />
          {/* Layout goes here */}
          {/* Routes go here */}
        </div>
      </Router>
    )
  }
}

export default App

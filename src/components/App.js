import React, { Component } from 'react'
import { connect } from 'react-redux'

/*----------------------------------------------------------------------------*/

// import { Row } from 'components/UIKit/Flex'
import Header from 'components/Header'
import Footer from 'components/Footer'

export class App extends Component {
  componentDidMount = () => {

  }

  render () {
    return (
      <div id="wrapper">
        <Header />
        { this.props.children }
        <Footer config={ {} } />
      </div>
    )
  }
}

export default connect()(App)

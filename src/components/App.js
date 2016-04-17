import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LookRoot } from 'react-look'

/*----------------------------------------------------------------------------*/

import { Row } from 'components/UIKit/Flex'
import Header from 'components/Header'
import Footer from 'components/Footer'

export class App extends Component {
  componentDidMount = () => {

  }

  render () {
    return (
      <LookRoot>
        <div id='wrapper'>
          <Header />
          <Row className={styles.main}>{this.props.children}</Row>
          <Footer config={{}} />
        </div>
      </LookRoot>
    )
  }
}

import { StyleSheet } from 'react-look'
import theme from 'theme'
import Color from 'color'

const styles = StyleSheet.create({
  main: {
    padding: `2rem`,
  },
})

export default connect()(App)

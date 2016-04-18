import React from 'react'
import { connect } from 'react-redux'
import { LookRoot, Presets } from 'react-look'
const config = Presets['react-dom']

/*----------------------------------------------------------------------------*/

import { Row, Column } from 'uikit/Flex'
import Header from 'components/Header'
import Footer from 'components/Footer'

export let App = ({ children }) =>
  <LookRoot config={config}>
    <Column className={styles.wrapper}>
      <Header />
      <Row className={styles.main}>{children}</Row>
      <Footer config={{}} />
    </Column>
  </LookRoot>

import { StyleSheet } from 'react-look'

const styles = StyleSheet.create({
  wrapper: {
    minHeight: `100vh`,
  },
  main: {
    padding: `2rem`,
  },
})

export default connect()(App)

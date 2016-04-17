import React from 'react'
import { connect } from 'react-redux'
import { LookRoot } from 'react-look'

/*----------------------------------------------------------------------------*/

import { Row, Column } from 'components/UIKit/Flex'
import Header from 'components/Header'
import Footer from 'components/Footer'

export let App = ({ children }) =>
  <LookRoot>
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

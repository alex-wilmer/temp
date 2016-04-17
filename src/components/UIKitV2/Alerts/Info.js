import React from 'react'
import { Row } from 'components/UIKit/Flex'

let Info = ({ children }) =>
  <Row className={styles.alert}>
    {children}
  </Row>

import { StyleSheet } from 'react-look'
import theme from 'theme'

const styles = StyleSheet.create({
  alert: {
    marginBottom: `3rem`,
    alignItems: `center`,
    padding: `3rem`,
    fontSize: `1.5rem`,
    color: `black`,
    backgroundColor: theme.greyScale4,
  },
})

export default Info

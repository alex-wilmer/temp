import React from 'react'

let Card = ({ children }) =>
  <div className={styles.card}>{children}</div>

import look, { StyleSheet } from 'react-look'
import theme from 'theme'

let styles = StyleSheet.create({
  card: {
    padding: `1rem`,
    backgroundColor: props => props.color || `white`,
    border: props => `1px solid ${theme[props.theme] || theme.greyScale4}`,
  },
})

export default look(Card)

import React from 'react'
import { Link } from 'react-router'
import { Row } from 'components/UIKit/Flex'

let Nav = () =>
  <Row className={styles.nav}>
    <Row flex='1' />
    <Row flex='1'>
      <Link to='/' className={styles.link}>Files</Link>
      <Link to='/annotations' className={styles.link}>Annotations</Link>
    </Row>
    <Row>
      <a className={styles.link}>Login</a>
      <Link to='/cart' className={styles.link}>Cart</Link>
    </Row>
  </Row>

import { StyleSheet } from 'react-look'
import theme from 'theme'
import Color from 'color'

const styles = StyleSheet.create({
  nav: {
    backgroundColor: theme.greyScale2,
    height: `41px`,
    justifyContent: `center`,
  },
  link: {
    color: `white`,
    padding: `10px 13px`,
    transition: `background-color 0.2s ease`,
    ':hover': {
      textDecoration: `none`,
      backgroundColor: Color(theme.$greyScale2).darken(0.5).rgbString(),
    },
  },
})

export default Nav

import React, { Children, cloneElement } from 'react'
import { Row, Column } from 'uikit/Flex'
import { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import theme from 'theme'
import Color from 'color'

let Tabs = ({
  activeComponent,
  className,
  tabs,
}) =>
  <Column className={className}>
    <Row>
      {Children.map(tabs, (child, i) => cloneElement(child, {
        className: c(
          styles.tab,
          child.props.active && styles.active,
          i && styles.margin
        ),
      }))}
    </Row>
    <Column className='content'>{activeComponent}</Column>
  </Column>

const borderStyle = `1px solid ${theme.greyScale4}`

const tabBorder = {
  borderLeft: borderStyle,
  borderRight: borderStyle,
  borderTop: borderStyle,
}

const styles = StyleSheet.create({
  tab: {
    padding: `1.5rem 2rem`,
    fontSize: `1.5rem`,
    color: `#000`,
    textDecoration: `none`,
    border: `1px solid transparent`,
    backgroundColor: theme.greyScale5,
    marginBottom: `-1px`,
    transition: `background-color 0.2s ease`,
    ':hover': {
      textDecoration: `none`,
      color: `#000`,
      backgroundColor: Color(theme.greyScale5).darken(0.1).rgbString(),
      borderRadius: `4px 4px 0 0`,
      ...tabBorder,
    },
  },
  active: {
    backgroundColor: `#fff !important`,
    zIndex: 2,
    borderRadius: `4px 4px 0 0`,
    ...tabBorder,
  },
  margin: {
    marginLeft: `0.4rem`,
  },
  content: {
    border: borderStyle,
    backgroundColor: `#fff`,
  },
})

export default Tabs

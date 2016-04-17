import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row, Column } from 'components/UIKit/Flex'
import Tabs from 'components/UIKitV2/Tabs'
import Info from 'components/UIKitV2/Alerts/Info'

/*
 *  mock
 */

let files = []
files.length = 20000

let Files = ({
  location,
  children,
}) =>
  <Row flex='1'>
    <Column className={styles.facetsPanel}>
      <Tabs
        tabs={[
          <Link
            key='tab1'
            to='/cases'
            active={location.pathname.includes(`cases`)}
          >
            Cases
          </Link>,
          <Link
            key='tab2'
            to='/files'
            active={location.pathname.includes(`files`)}
          >
            Files
          </Link>,
        ]}
        activeComponent={children}
      />
    </Column>

    <Column className={styles.content}>
      <Info>
        <i className='fa fa-long-arrow-left' />
        Start searching by selecting a facet
      </Info>

      <Column>
        <h2>Files</h2>
      </Column>
    </Column>
  </Row>

import { StyleSheet } from 'react-look'
import theme from 'theme'

const styles = StyleSheet.create({
  facetsPanel: {
    width: theme.facetsPanelWidth,
  },
  facet: {
    backgroundColor: `white`,
  },
  content: {
    marginLeft: `30px`,
    width: `calc(100% - ${theme.facetsPanelWidth})`,
  },
})

export default connect()(Files)

/* @flow */
import React, { Component, PropTypes } from 'react';
import type UIComponent from 'uikit/types';

import Row from './Row';

export default class Column<UIComponent> extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object
  };

  render(): React.Element {
    let { children, style, ...rest } = this.props; // eslint-disable-line no-redeclare

    return (
      <Row {...rest} style={{...style, flexDirection: 'column' }}>
        {children}
      </Row>
    );
  }
}

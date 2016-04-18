/* @flow */
import React, { Component, PropTypes } from 'react';

import type UIComponent from 'uikit/types';

let baseStyle = {
  display: 'flex',
  flexDirection: 'row',
  boxSizing: 'border-box',
  position: 'relative',
  outline: 'none'
};

export default class Row<UIComponent> extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object
  };

  render(): React.Element {
    let { children, style, flex, ...rest } = this.props; // eslint-disable-line no-redeclare

    return (
      <div style={{...baseStyle, flex, ...style}} {...rest} >
        {children}
      </div>
    );
  }
}

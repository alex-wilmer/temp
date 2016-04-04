/* @flow */
import React, { Component, PropTypes } from 'react';

import type UIComponent from 'components/UIKit/types';

let baseStyle = {
  display: 'flex',
  flexDirection: 'row',
  boxSizing: 'border-box',
  position: 'relative',
  alignItems: 'stretch',
  flexShrink: 0,
  border: '0 solid #000',
  margin: 0,
  padding: 0,
  outline: 'none'
};

export default class Row<UIComponent> extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object
  };

  render(): React.Element {
    let { children, style, ...rest } = this.props; // eslint-disable-line no-redeclare

    return (
      <div style={{...baseStyle, ...style}} {...rest} >
        {children}
      </div>
    );
  }
}

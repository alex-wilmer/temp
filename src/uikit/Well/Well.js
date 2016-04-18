/* @fflow */

import React, { Component, PropTypes } from 'react';

let baseStyle = {
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#e5e5e5'
};

class Well extends Component {
  // $FlowIssue https://github.com/facebook/flow/issues/850
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.any
  };

  render(): React.Element {
    let { children, style } = this.props;

    return (
      <div style={{...baseStyle, ...style}}>
        {children}
     </div>
    );
  }
}

export default Well;

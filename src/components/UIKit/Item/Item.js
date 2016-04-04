/* @fflow */

import React, { Component, PropTypes } from 'react';

let baseStyle = {
  backgroundColor: '#fff',
  outline: 'none',
  display: 'flex',
  position: 'relative',
  boxShadow: '0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)',
  flex: 1,
  alignItems: 'center'
};

class Item extends Component {
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

export default Item;

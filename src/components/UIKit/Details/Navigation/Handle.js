/* @flow */
import React from 'react';

import Item from './Item';

export default function Handle({style}: {style?: Object}): React.Element {
  return (
    <Item style={{
      // cursor: 'pointer',
      ...style}}>
      <i style={{
        // transform: 'rotate(90deg)',
        color: '#ccc'
      }} className="material-icons">remove</i>
    </Item>
  );
}

/* @flow */
import React from 'react';

import type { TableProps } from './types';

let baseStyle = {
  backgroundColor: '#fafafa',
  borderBottom: '1px solid #eee',
  display: 'table-header-group',
  left: 0,
  paddingRight: '16px',
  right: 0,
  zIndex: 1
};

function THead({children, style}: TableProps): React.Element {
  return (
    <thead style={{...baseStyle, ...style}}>
      {children}
    </thead>
  );
}

export default THead;

/* @flow */
import React from 'react';

import type { TableProps } from './types';

let baseStyle = {
  backgroundColor: '#fff',
  display: 'table-header-group',
};

function TBody({children, style}: TableProps): React.Element {
  return (
    <tbody style={{...baseStyle, ...style}}>
    {children}
    </tbody>
  );
}

export default TBody;

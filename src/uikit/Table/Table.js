/* @flow */
import React from 'react';

import type { TableProps } from './types';

let baseStyle = {
  color: '#222',
  backgroundColor: '#fff',
  tableLayout: 'auto',
  width: '100%',
  borderSpacing: '0px'
};

function Table({children, style}: TableProps): React.Element {
  return (
    <table style={{...baseStyle, ...style}}>
    {children}
    </table>
  );
}

export default Table;

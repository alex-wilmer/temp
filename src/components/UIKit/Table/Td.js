/* @flow */
import React from 'react';

import type { TableProps } from './types';

let baseStyle = {
  borderBottom: '1px solid rgba(0,0,0,0.065)',
  display: 'table-cell',
  padding: '0 .5rem',
  verticalAlign: 'middle',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

function Td({children, style}: TableProps): React.Element {
  return (
    <td style={{...baseStyle, ...style}}>
    {children}
    </td>
  );
}

export default Td;

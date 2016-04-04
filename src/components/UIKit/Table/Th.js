/* @flow */
import React from 'react';

import ParamsLink from 'components/Links/ParamsLink';

import type { ThProps } from './types';

let baseStyle = {
  color: '#565656',
  backgroundColor: '#fafafa',
  display: 'table-cell',
  fontSize: '13px',
  fontWeight: 'normal',
  padding: '0 .5rem',
  textAlign: 'left',
  verticalAlign: 'middle'
};

function arrow(d: string): React.Element {
  return <svg x="0px" y="0px" width="7px" height="8px" viewBox="0 0 7 8" focusable="false"><path fill="#000000" d={d}></path></svg>;
}

function descArrow(): React.Element {
  return arrow('M2.984,0v6L0.681,4l-0.689,0.72l3.536,3.289l3.464-3.273L6.241,4L3.984,6L3.969,0H2.984z');
}

function ascArrow(): React.Element {
  return arrow('m 4,8.009 0,-6 2.303,2 L 6.992,3.289 3.456,0 -0.008,3.273 0.743,4.009 3,2.009 l 0.015,6 0.985,0 z');
}

export default function Th({
  children, colSpan, field, sortable, style, sort, order
}: ThProps): React.Element {
  let sorted = typeof field !== 'undefined' && sort === field;

  return (
    <th
      colSpan={colSpan}
      style={{
        ...baseStyle,
        textDecoration: sortable ? 'underline' : 'none',
        fontWeight: sorted ? 'bold' : 'normal',
        ...style
      }}
    >
      {sortable ? (
        <ParamsLink
          query={{
            offset: 0,
            sort: field,
            order: (sorted && order === 'desc') ? 'asc' : 'desc'
          }}
        >
          {children}
        </ParamsLink>
      ) : children}
      {sorted && (
        <span style={{marginLeft: '.5rem'}}>
        {order === 'asc' ? ascArrow() : descArrow()}
        </span>)}
   </th>
 );
}

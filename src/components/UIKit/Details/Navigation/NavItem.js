/* @flow */
import React from 'react';

import ParamsLink from 'components/Links/ParamsLink';
import Item from './Item';

let baseStyle = {
  alignItems: 'center',
  color: '#888',
  fontSize: '1.25rem',
  padding: '0.75rem',
  cursor: 'pointer'
};

export default function NavItem({
  spyId,
  active,
  children,
  style,
  handleOnClick
}: any): React.Element {
  return (
      Item({
        style: {
          ...baseStyle,
          ...style,
          ...((spyId && spyId === active) && {
            backgroundColor: '#ccc',
            color: 'white',
            cursor: 'default'
          })
        },
        onClick: handleOnClick,
        children
      })

  );
}

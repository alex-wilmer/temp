/* @flow */
import React from 'react';

import Spinner from 'uikit/Spinner/Spinner';
import Item from './Item';

type TypeProps = {
  isFetching: bool,
  children: any,
  style?: Object
}

export default function Type({
  isFetching, children, style
}: TypeProps): React.Element {
  return (
    <Item style={{fontSize: '2rem', ...style}}>
      {children}
      {Spinner({
        style: {
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          opacity: isFetching ? 1 : 0
        }})}
    </Item>
  );
}

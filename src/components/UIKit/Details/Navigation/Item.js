/* @flow */
import React, { Component, PropTypes } from 'react';
import type {UIComponent } from 'components/UIKit/types';

import Column from 'components/UIKit/Flex/Column';

let baseStyle = {
  alignItems: 'center',
  padding: '0.75rem'
};

export default function Item({ // eslint-disable-line no-dupe-args
  children,
  style,
  ...rest // eslint-disable-line no-redeclare
}: UIComponent): React.Element {
  return (
    <Column {...rest} style={{...baseStyle, ...style}}>
      {children}
    </Column>
  );
}

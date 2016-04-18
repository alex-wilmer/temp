/* @flow */
import React, { Component, PropTypes } from 'react';
import type { UIComponent } from 'uikit/types';

import Row from 'uikit/Flex/Row';

let baseStyle = {
  fontSize: '1.1rem',
  textTransform: 'uppercase',
  color: '#888',
  margin: '.5rem 0'
};

export default function Header({
  children, style
}: UIComponent): React.Element {
  return (
    <Row style={{...baseStyle, ...style}}>
      {children}
    </Row>
  );
}

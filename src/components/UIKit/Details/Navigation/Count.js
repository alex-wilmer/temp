/* @flow */
import React, { Component, PropTypes } from 'react';
import type {UIComponent } from 'components/UIKit/types';

import Row from 'components/UIKit/Flex/Row';

let baseStyle = {
  fontSize: '0.7rem',
  color: '#888',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.25rem',
  width: '1.25rem',
  backgroundColor: '#eee',
  borderRadius: '1rem'
};

export default function Count({
  children,
  style
}: UIComponent): React.Element {
  return (
    <Row style={{...baseStyle, ...style}}>
      {children}
    </Row>
  );
}

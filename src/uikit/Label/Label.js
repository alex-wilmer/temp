/* @flow */
import React from 'react';

import Row from 'uikit/Flex/Row';

let baseStyle = {
  fontSize: '.7rem',
  color: '#666',
  backgroundColor: '#efefef',
  padding: '0 .3rem',
  marginLeft: '1rem',
  borderRadius: '.25rem',
  alignItems: 'center'
};

export default function Card({
  children, style
}: any): React.Element {
  return (
    <Row style={{ ...baseStyle, ...style }}>
      {children}
    </Row>
  );
}

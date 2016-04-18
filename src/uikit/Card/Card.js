/* @flow */
import React from 'react';

import Row from 'uikit/Flex/Row';
import Column from 'uikit/Flex/Column';
import { SECONDARY } from 'style/colors';

let baseStyle = {
  borderRadius: '2px',
  padding: '1rem',
  border: '1px solid #e5e5e5',
  backgroundColor: '#fff',
  margin: '.5rem',
  lineHeight: '1.7rem'
};

export default function Card({
  children, Icon, HeaderIcon, style, title, titleStyle
}: any): React.Element {
  return (
    <Row style={{...baseStyle, ...style}}>
      {Icon && (
        <Row style={{alignItems: 'center'}}>
          {<Icon style={{marginRight: '1rem'}} />}
        </Row>
      )}
      <Column style={{flex: 1}}>
      {title && (
        <Row style={{
          marginBottom: '.5rem',
          textTransform: 'uppercase',
          color: SECONDARY,
          alignItems: 'center',
          fontSize: '1rem',
          ...titleStyle
        }}>
          { HeaderIcon &&
          <HeaderIcon style={{ marginRight: `0.6rem` }} />
          }
          <Row>{title}</Row>
        </Row>
      )}

      {children}

      </Column>
   </Row>
  );
}

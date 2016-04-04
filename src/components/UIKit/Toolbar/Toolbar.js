/* @fflow */
import React from 'react';
import { Row } from 'components/UIKit/Flex';

export type ToolbarType = {
  children: any,
  title: string
}

export default function Toolbar({
  children, title
}: ToolbarType): React.Element {
  return (
    <Row
      style={{
        backgroundColor: '#fafafa',
        padding: '1rem',
        borderBottom: '1px solid #e5e5e5'
      }}
    >
      <Row style={{ fontSize: '1.3rem', textTransform: 'capitalize' }}>{title}</Row>
      <Row style={{ marginLeft: 'auto' }}>
        { children }
      </Row>
    </Row>
  );
}

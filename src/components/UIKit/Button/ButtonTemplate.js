/* @flow */
import React from 'react';

import Button from './Button';
import Row from 'components/UIKit/Flex/Row';

export default function ButtonTemplate({
  children, style, PrefixComponent, PostfixComponent, ...rest
}: any): React.Element {
  return (
    <Button style={style} { ...rest }>
      <Row style={{alignItems: 'center', justifyContent: 'center'}}>
      { PrefixComponent }
      { children }
      { PostfixComponent }
      </Row>
   </Button>
  );
}

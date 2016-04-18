/* @flow */
import React from 'react';

import Column from 'uikit/Flex/Column';

import Type from './Type';
import Handle from './Handle';
import NavItem from './NavItem';
import Count from './Count';

let baseStyle = {
  backgroundColor: '#fafafa',
  borderLeft: '1px solid #e5e5e5',
  color: '#888'
};

export default function Navigation({
  details, children, type, active, handleOnClick, style
}: any): React.Element {
  let item = (details || {}).item;
  let isFetching = (details || {}).isFetching || false;
  let annotationsCount = ((item || {}).annotations || []).length;
  let transactionsCount = ((item || {})._transaction_logs || []).length;

  return (
    <Column style={{...baseStyle, ...style}}>
      <Type isFetching={isFetching}>{type}</Type>
      <Handle />
      {React.Children.map(children, child => {
        return child && React.cloneElement(child, {
          active,
          handleOnClick: () => handleOnClick(child.props.spyId)
        });
      })}
    </Column>
  );
}

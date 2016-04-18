/* @flow */
import React from 'react';

import ParamsLink from 'components/Links/ParamsLink';
import IndeterminateProgress from 'uikit/Progress/IndeterminateProgress';

type TabProps = {
  tab: string,
  label: string,
  title: string
};

let style = {
  tab: {
    display: 'flex',
    position: 'relative',
    fontWeight: '400',
    cursor: 'pointer',
    padding: '1rem 0',
    justifyContent: 'center',
    flex: 1
  },
  border: {
    height: '4px',
    left: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#ccc'
  }
};

export default function Tab({
  tab, label, title
}: TabProps): React.Element {
  let isActive = tab === label;

  return (
    <div
      style={{...style.tab, ...(isActive ? {
        fontWeight: '600', cursor: 'default'
      } : {})}}
    >
      <div style={{...style.border, ...(isActive ? {
        backgroundColor: 'rgb(66, 133, 244)'
      } : {})}}></div>
      <ParamsLink query={{dtab: label}}>{title}</ParamsLink>
    </div>
  );
}

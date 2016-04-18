/* @flow */
import React from 'react';

import ParamsLink from 'components/Links/ParamsLink';
import IndeterminateProgress from 'uikit/Progress/IndeterminateProgress';
import Tab from './Tab';

type TabsProps = {
  isFetching: bool,
  tab: string
};

export default function Tabs({
  isFetching, tab
}: TabsProps): React.Element {
  return (
    <div style={{display: 'flex', fontSize: '0.9rem', flexDirection: 'row', position: 'relative'}}>
      {isFetching && IndeterminateProgress()}
      {Tab({tab, label: 'details', title: 'Details'})}
      {Tab({tab, label: 'activity', title: 'Activity'})}
    </div>
  );
}

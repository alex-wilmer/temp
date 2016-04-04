/* @flow */

import React from 'react';

export default (props: any): React.Element =>
  <i { ...props } className="material-icons">
    { props.children }
 </i>;

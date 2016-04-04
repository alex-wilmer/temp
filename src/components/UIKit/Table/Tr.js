/* @flow */
import React from 'react';

import type { TrProps } from './types';

let baseStyle = {
  width: '100%',
  height: '32px',
};

function Tr({
  className, style, children, ...rest
}: TrProps): React.Element {
  return (
    <tr style={{...baseStyle, ...style}} className={className} {...rest}>
      {children}
    </tr>
  );
}

export default Tr;

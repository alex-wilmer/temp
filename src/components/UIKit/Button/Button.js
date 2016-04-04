/* @flow */
import React from 'react';

export default function Button(props: any): React.Element {
  let { style, ...rest} = props;
  return (
    <button
      style={{
        fontWeight: 300,
        ...style
      }}
      { ...rest }
      className="mdl-button">
      { props.children }
   </button>
  );
}

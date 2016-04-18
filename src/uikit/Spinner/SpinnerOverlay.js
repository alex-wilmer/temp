/* @flow */
import React from 'react';

type SpinnerOverlayProps = {
  children: any,
  style: Object
}

let SpinnerOverlay = ({
  children, style
}: SpinnerOverlayProps): React.Element => (
  <div style={{
    position: `absolute`,
    top: 0,
    left: 0,
    height: `100%`,
    width: `100%`,
    zIndex: 20,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    pointerEvents: `none`,
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
    transition: `opacity 0.35s ease`,
    ...style
  }}>
    {children}
  </div>
);

export default SpinnerOverlay;

/* @flow */
/* eslint-disable no-shadow, no-unused-vars */

import React from 'react';

type SnackBarProps = {
  message: string,
  dismissAction: any
};

export default function Snackbar({
  message, dismissAction
}: SnackBarProps): React.Element {
  return (
    <div className="mdl-snackbar is-active">
      <div className="mdl-snackbar__text">
        { message }
      </div>
      <div className="mdl-snackbar__action" onClick={dismissAction}>
        Dismiss
      </div>
    </div>
  );
}

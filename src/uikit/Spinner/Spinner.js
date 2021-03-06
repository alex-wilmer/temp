/* @flow */
import React from 'react';

let Spinner = ({style}: Object): React.Element => (
  <div style={{
    transition: `opacity 0.35s ease`,
    ...style
  }} className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active is-upgraded" data-upgraded=",MaterialSpinner">
    <div className="mdl-spinner__layer mdl-spinner__layer-1" style={{borderColor: 'rgb(66, 133, 244)'}}>
      <div className="mdl-spinner__circle-clipper mdl-spinner__left">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__gap-patch">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__circle-clipper mdl-spinner__right">
        <div className="mdl-spinner__circle"></div>
      </div>
    </div>
    <div className="mdl-spinner__layer mdl-spinner__layer-2" style={{borderColor: '#123e57'}}>
      <div className="mdl-spinner__circle-clipper mdl-spinner__left">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__gap-patch">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__circle-clipper mdl-spinner__right">
        <div className="mdl-spinner__circle"></div>
      </div>
    </div>
    <div className="mdl-spinner__layer mdl-spinner__layer-3" style={{borderColor: '#bb0e3d'}}>
      <div className="mdl-spinner__circle-clipper mdl-spinner__left">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__gap-patch">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__circle-clipper mdl-spinner__right">
        <div className="mdl-spinner__circle"></div>
      </div>
    </div>
    <div className="mdl-spinner__layer mdl-spinner__layer-4" style={{borderColor: '#5b5151'}}>
      <div className="mdl-spinner__circle-clipper mdl-spinner__left">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__gap-patch">
        <div className="mdl-spinner__circle"></div>
      </div>
      <div className="mdl-spinner__circle-clipper mdl-spinner__right">
        <div className="mdl-spinner__circle"></div>
      </div>
    </div>
  </div>
);

export default Spinner;

import React from 'react';

let IndeterminateProgress = () => (
  <div style={{height: '4px', position: 'absolute', zIndex: 2000, width: '100%'}} className="mdl-progress mdl-progress__indeterminate">
    <div className="progressbar bar bar1" style={{backgroundColor: 'rgb(66, 133, 244)', width: '0%'}}></div>
    <div className="bufferbar bar bar2" style={{width: '100%'}}></div>
    <div className="auxbar bar bar3" style={{backgroundColor: 'rgb(66, 133, 244)', width: '0%'}}></div>
  </div>
);

export default IndeterminateProgress;

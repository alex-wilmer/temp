/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

type ScrollToContentProps = {
  node: Object
};

export default function ScrollToContent({node}: ScrollToContentProps): React.Element {
  let scrollToContent = () => {
    let domNode = ReactDOM.findDOMNode(node);
    window.scrollTo(0, domNode.offsetTop);
    domNode.focus();
  };

  return (
    <a onClick={ scrollToContent.bind(this) }
       onKeyDown={ (event) => (event.key === 'Enter') && scrollToContent() }
       tabIndex="0"
       className="skip-to-content"
    >
      Skip to Content
    </a>
  );
}

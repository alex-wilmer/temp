/* @@flow */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
// $FlowIgnore
import _ from 'lodash';

import Column from 'components/UIKit/Flex/Column';

function lastchild(children) {
  /*
   * When the children's values (in an array) are [object, object, object, false/0/null],
   * #filter removes these false-y values - in fact, any values (object or not) without
   * the 'props.id' property defined, as spacerHeight depends on 'props.id'
   */
  return _.last(_.filter(children, child => _.has(child, 'props.id')));
}

let baseStyle = {
  fontSize: '1rem',
  height: 'calc(100vh - 167px)',
  overflowY: 'auto',
};

export default class Content extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    handleOnScroll: PropTypes.func,
    getSectionCoords: PropTypes.func
  };

  constructor() {
    super();
    this.sections = {};

    window.addEventListener('resize', this.setupScrollSpy);
  }

  componentDidMount() {
    this.setupScrollSpy();
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.children !== this.props.children) {
      this.setupScrollSpy();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setupScrollSpy);
  }

  setupScrollSpy = (): void => {
    this.el = ReactDOM.findDOMNode(this);
    let spacerHeight = this.spacerHeight(this.el, this.props.children, this.sections);
    this.spacerRefEl = ReactDOM.findDOMNode(this.spacerRef);
    this.spacerRefEl.style.minHeight = `${spacerHeight}px`;

    let coords = Object.keys(this.sections).reduce((acc, sid) => {
      let node = ReactDOM.findDOMNode(this.sections[sid]);
      return {
        ...acc,
        [sid]: {
          id: sid,
          top: node.offsetTop,
          bottom: node.offsetTop + node.clientHeight
        }
      };
    }, {});

    this.props.getSectionCoords(coords);
  };

  el: Object;
  spacerRef: Object;
  spacerRefEl: Object;
  sections: Object;

  spacerHeight(parent: Object, children: Object, refs: Object): number {
    let lastChild: Object = children.constructor === Array ? lastchild(children) : children;
    let lastNode = ReactDOM.findDOMNode(refs[lastChild.props.id]);
    return parent.clientHeight - lastNode.clientHeight;
  }

  render(): React.Element {
    let { children, style, handleOnScroll } = this.props;

    return (
      <Column onScroll={handleOnScroll} style={{...baseStyle, ...style}}>
        {React.Children.map(children, (child, i) => {
          return child && React.cloneElement(child, {
            ref: (ref) => {
              if (ref) { this.sections[ref.props.id] = ref; }
            }
          });
        })}
        <div ref={ref => this.spacerRef = ref}></div>
      </Column>
    );
  }
}

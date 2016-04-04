/* @flow */
import React, {Component, PropTypes} from 'react';

import Column from 'components/UIKit/Flex/Column';

import Header from './Header';

let baseStyle = {
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  width: '100%'
};

export default class Section extends Component {
  static propTypes = {
    id: PropTypes.string,
    header: PropTypes.node,
    count: PropTypes.number,
    children: PropTypes.node,
    style: PropTypes.object
  };

  render(): React.Element {
    let { id, header, children, style } = this.props;

    return (
      <Column id={id} style={{...baseStyle, ...style}}>
        {Header({children: header})}
        {children}
      </Column>
    );
  }
}

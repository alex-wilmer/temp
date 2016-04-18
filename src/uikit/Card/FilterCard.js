/* @unflow */
import React, { Component, Children, cloneElement } from 'react';

import Row from 'uikit/Flex/Row';
import Column from 'uikit/Flex/Column';
import { SECONDARY } from 'style/colors';

let baseStyle = {
  borderRadius: '2px',
  border: '1px solid #e5e5e5',
  backgroundColor: '#fff',
  margin: '.5rem',
  lineHeight: '1.7rem'
};

class FilterCard extends Component {
  constructor(props: any) {
    super(props);
    this.state = { filterValue: `` };
  }

  handleInput = (): void => {
    this.setState({ filterValue: this.refs.filterInput.value });
  };

  render() {
    let { children, Icon, HeaderIcon, style, title, placeholder, label } = this.props;

    return (
      <Row style={{...baseStyle, ...style}}>
        {Icon && (
          <Row style={{alignItems: 'center'}}>
            {<Icon style={{marginRight: '1rem'}} />}
          </Row>
        )}
        <Column style={{flex: 1}}>
        {title && (
          <Row style={{
            padding: `1rem`,
            textTransform: 'uppercase',
            color: SECONDARY,
            alignItems: 'center',
            fontSize: '1rem'}}
          >
            { HeaderIcon &&
            <HeaderIcon style={{ marginRight: `0.6rem` }} />
            }
            <Row>{title}</Row>
            <Row style={{
              marginLeft: 'auto',
              color: 'rgb(70, 70, 70)',
              alignItems: 'center'
            }}>
              <label htmlFor={`${label.replace(/ /g, '')}`}>{label}</label>
              <input
                id={`${label.replace(/ /g, '')}`}
                name={`${label.replace(/ /g, '')}`}
                ref="filterInput"
                onChange={this.handleInput}
                type="text"
                placeholder={placeholder || 'Type here..'}
                style={{ marginLeft: '0.5rem', padding: '0.3rem 0.6rem'}}
              />
            </Row>
          </Row>
        )}

        { Children.map(children, (child) => {
          return child && cloneElement(child, {
            filterValue: this.state.filterValue
          });
        })}
        </Column>
     </Row>
    );
  }
}

export default FilterCard;

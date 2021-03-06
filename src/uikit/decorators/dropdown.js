import React, { Component, PropTypes } from 'react';
import { toggle } from 'uikit/decorators';

export default function dropdown(ComposedComponent) {
  class Dropdown extends Component {
    static propTypes = {
      active: PropTypes.bool,
      setActive: PropTypes.func
    };

    constructor(props) {
      super(props);
      this.state = { mouseIsDownOnComponent: false };
      window.addEventListener('mousedown', this.closeDropdown);
    }

    componentWillUnmount() {
      window.removeEventListener('mousedown', this.closeDropdown);
    }

    closeDropdown = () => {
      if (this.state.mouseIsDownOnComponent) return;
      this.props.setActive(false);
    };

    mouseDownHandler = () => this.setState({ mouseIsDownOnComponent: true });
    mouseUpHandler = () => this.setState({ mouseIsDownOnComponent: false });

    render() {
      return (
        <ComposedComponent
          { ...this.state }
          { ...this.props }
          mouseDownHandler = { this.mouseDownHandler }
          mouseUpHandler = { this.mouseUpHandler }
        />
      );
    }
  }

  return toggle(Dropdown);
}

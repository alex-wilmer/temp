/* @flow */
import React, { Component, PropTypes } from 'react';

import scrollTo from 'utils/scrollTo';

import { SpinnerOverlay } from 'components/UIKit/Spinner';
import Row from 'components/UIKit/Flex/Row';
import Column from 'components/UIKit/Flex/Column';

import Header from './Header';
import Content from './Content';

let baseStyle = {
  backgroundColor: 'white',
  height: '100vh'
};

export default class Details extends Component {
  static propTypes = {
    details: PropTypes.object,
    children: PropTypes.any,
    style: PropTypes.object,
    router: PropTypes.object,
    headerId: PropTypes.string,
    HeaderComponent: PropTypes.any,
    NavigationComponent: PropTypes.any,
    DownloadContainer: PropTypes.any,
    CloseLink: PropTypes.any,
    CloseIcon: PropTypes.any
  };

  constructor() {
    super();
    this.state = {
      active: 'details',
      coords: {}
    };
  }

  componentDidUpdate() {
    this.contentRefEl = this.contentRef ? this.contentRef.el : {};
  }

  getSectionCoords(coords: Object) {
    this.setState({coords});
  }

  contentRef: Object;
  contentRefEl: Object;

  watchScroll(el: Object, coords: Object) {
    let st = el.target.scrollTop;
    let ks = Object.keys(coords);
    for (let i = 0; ks.length; i++) {
      let s = coords[ks[i]];
      if (s.top <= st && st < s.bottom && s) {
        if (s.id !== this.state.active) {
          this.setState({active: s.id});
        }
        break;
      }
    }
  }

  scrollToSection(section: Object, coords: Object) {
    scrollTo(this.contentRefEl, coords[section].top, 200);
  }

  render(): React.Element {
    let {
      details, children, style, headerId, NavigationComponent,
      CloseLink, CloseIcon, DownloadContainer, HeaderComponent: CustomHeader
    } = this.props;

    let { active, coords } = this.state;
    let HeaderComponent = CustomHeader || Header;

    return (
        <Row style={{...baseStyle, ...style}}>
          {NavigationComponent && NavigationComponent({details, active,
            handleOnClick: section => this.scrollToSection(section, coords)
          })}
          <Column style={{flex: '1'}}>
            <HeaderComponent
              CloseLink={CloseLink}
              CloseIcon={CloseIcon}
              DownloadContainer={DownloadContainer}
              entity={details.item}
            >
              { headerId || '...'}
            </HeaderComponent>
            <SpinnerOverlay style={{opacity: details.isFetching ? 0.5 : 0, backgroundColor: '#fff'}} />
            {!!headerId && (
              <Content
                ref={ref => this.contentRef = ref}
                getSectionCoords={c => this.getSectionCoords(c)}
                handleOnScroll={el => this.watchScroll(el, coords)}>
              {children}
              </Content>
            )}
          </Column>
       </Row>
    );
  }
}

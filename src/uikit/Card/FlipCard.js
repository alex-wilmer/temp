/* @flow */
import React from 'react';

import Row from 'uikit/Flex/Row';
import Column from 'uikit/Flex/Column';
import Button from 'uikit/Button/Button';
import Card from './Card';
import {toggle} from 'uikit/decorators';
import { Spinner, SpinnerOverlay } from 'uikit/Spinner';
import { HelpIcon, WaitIcon } from 'components/icons';
// $FlowIgnore
import Tooltip from 'rc-tooltip';

type Props = {
  active: boolean,
  children: any,
  toggleActive(): void,
  tooltip: Object,
  isFetching: boolean,
  more: boolean
}

class FlipCard extends React.Component<any, Props, {}> {
  render(): React.Element {
    let { children, active, toggleActive, tooltip, isFetching, more, ...rest } = this.props;
    return (
      // need display: 'block' otherwise graph widgets get super tall.
      // height x n graph in the row  ... i dunno.
      <Card style={{flex: 1, background: 'none', border: 'none', display: 'block'}} {...rest}>
        { tooltip &&
          <Row style={{ justifyContent: 'flex-end' }}>
              <Tooltip
                placement="left"
                trigger={[ 'hover' ]}
                overlay={
                  <Row style={ tooltip.size }>{ tooltip.text }</Row>
              }>
                <Row><HelpIcon style={{ fontSize: '1.3rem', color: '#2a72a5' }} /></Row>
              </Tooltip>

          </Row>
        }

        <Column>
          <Column>
            <SpinnerOverlay style={{opacity: isFetching ? 1 : 0, background: 'none', marginTop: '-2.7rem'}}>
              <Row>
                <WaitIcon style={{ fontSize: '4rem', color: '#2a72a5' }} />
                <Spinner style={{
                  position: 'absolute',
                  top: '0rem',
                  left: '0rem',
                  opacity: 1,
                  width: '4rem',
                  height: '4rem'
                }}/>
              </Row>
            </SpinnerOverlay>
            { children[0]}
          </Column>
          <Column style={{
            display: active ? 'inherit' : 'none'
          }}>
            { children[1] }
          </Column>
        </Column>

        <Row>
          <Column style={{flex: 1, justifyContent: 'flex-start'}}>
            {/* optional third element */}
            { children[2] }
          </Column>

          <Column style={{justifyContent: 'flex-end'}}>
            <Row style={{justifyContent: 'flex-end'}}>
              {!!(!isFetching && more) && <Button onClick={toggleActive} style={{marginTop: '.5rem'}}>{active ? 'less' : 'more'}</Button>}
            </Row>
          </Column>
        </Row>
     </Card>
    );
  }
}

export default toggle(FlipCard);

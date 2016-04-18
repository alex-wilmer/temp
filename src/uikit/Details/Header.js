/* @flow */
import React from 'react';
import DownloadIcon from 'components/icons/DownloadIcon';

type HeaderProps = {
  children: any,
  style: Object,
  CloseLink(props: Object): React.Element,
  CloseIcon(props: Object): React.Element,
  DownloadContainer(props: Object): React.Element
}
import { Row, Column } from 'uikit/Flex';

let baseStyle = {
  fontSize: '1.2rem',
  padding: '1.1rem',
  alignItems: 'center',
  textTransform: 'capitalize'
};

export default function Header({
  children, style, CloseIcon, CloseLink, DownloadContainer
}: HeaderProps): React.Element {
  return (
    <Row style={{...baseStyle, ...style}}>
      <Column>
        {children.length > 30 ? `${children.substr(0, 30)}...` : children }
      </Column>
      <Row style={{marginLeft: 'auto'}}>
        {DownloadContainer &&
        <DownloadContainer>
          <DownloadIcon
            style={{
              fontSize: '1.6rem', marginRight: '1rem', cursor: 'pointer'
            }}
          />
        </DownloadContainer>
        }
        {CloseLink && <CloseLink><CloseIcon /></CloseLink>}
      </Row>
    </Row>
  );
}

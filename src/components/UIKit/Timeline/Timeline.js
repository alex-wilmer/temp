/* @fflow */

import React, { Component, PropTypes } from 'react';
// $FlowIgnore
import moment from 'moment';
import Table, { THead } from 'components/UIKit/Table';
import _ from 'lodash';

export default class Timeline extends Component {
  // $FlowIssue https://github.com/facebook/flow/issues/850
  static propTypes = {
    children: PropTypes.array.isRequired,
    columnsFn: PropTypes.func,
    rowsFn: PropTypes.func,
    groupHeaderFn: PropTypes.func,
    style: PropTypes.any
  };
  // $FlowIssue https://github.com/facebook/flow/issues/850
  static defaultProps = {
    children: []
  };

  groupByDate(x: Object): Object {
    let date = moment(x.updated_datetime);
    let now = moment();

    let recent = date.isSame(now, 'd') || date.isSame(now.subtract(1, 'd'), 'd');
    let thisYear = date.isSame(now, 'y');

    if (recent) return date.calendar().split(' ')[0];
    else if (thisYear) return date.format('MMMM');
    return date.format('YYYY MMMM');
  }

  groupBy(xs: Array<Object>, fn: Function): Object {
    return xs.reduce((acc, x) => {
      let type = fn(x);
      return {
        ...acc,
        // $FlowIgnore
        [type]: [...acc[type] || [], x]
      };
    }, {});
  }

  render(): React.Element {
    let { children, groupHeaderFn, rowsFn, columnsFn } = this.props;
    let groupByType = this.groupBy(children, this.groupByDate.bind(this));
    return (
        <div>
          <Table>
            { columnsFn() }
            {_.map(groupByType, (item, key) => {
              return [
                <THead>
                {groupHeaderFn(key)}
                </THead>,
                rowsFn(item)
              ];
            })}
          </Table>
      </div>
    );
  }
}

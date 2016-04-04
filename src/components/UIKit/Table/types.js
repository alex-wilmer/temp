/* @flow */

export type TableProps = {
  children: any,
  style?: Object
};

export type ThProps = {
  children: any,
  field: string,
  sortable: bool,
  colSpan: number,
  sort: string,
  order: string,
  style: Object
};

export type TrProps = {
  children: any,
  style: Object,
  className: String
};

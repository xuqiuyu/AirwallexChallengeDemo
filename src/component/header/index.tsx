import * as React from 'react';
const style = require('./header.scss');

export interface Props {
    title: string
}

const Header = ({ title } : Props) => (
  <div className={style.header}>
    <div>{title}</div>
  </div>
);

export default Header;

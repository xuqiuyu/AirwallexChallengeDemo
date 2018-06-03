import React from 'react';
import { string } from 'prop-types';
import * as style from './header.scss';

const Header = ({ title }) => (
  <div className={style.header}>
    <div>{title}</div>
  </div>
);

Header.propTypes = {
  title: string
};

Header.defaultProps = {
  title: ''
};

export default Header;

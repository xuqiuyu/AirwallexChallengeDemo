import React from 'react';
import { string } from 'prop-types';
import * as style from './footer.scss';

const Footer = ({ content, description }) => (
  <div className={style.footer}>
    <div>{content}</div>
    <div>{description}</div>
  </div>
);

Footer.propTypes = {
  content: string,
  description: string
};

Footer.defaultProps = {
  content: '',
  description: ''
};

export default Footer;

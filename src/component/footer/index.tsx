import * as React from 'react';
const style = require('./footer.scss');

export interface Props {
    content: string;
    description: string;
} 

const Footer = ({ content, description} : Props) => (
    <div className={style.footer}>
      <div>{content}</div>
      <div>{description}</div>
    </div>
  );

export default Footer;
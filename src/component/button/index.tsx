import * as React from 'react';
const style = require('./button.scss');

export interface Props {
    text: string;
    onClick: any;
} 

const Button = ({text, onClick} : Props) => (
    <div className={style.button} onClick={onClick}>
    {text}
  </div>
);

export default Button;
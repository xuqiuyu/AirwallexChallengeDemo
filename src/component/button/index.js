import React from 'react';
import { string, func } from 'prop-types';
import * as style from './button.scss';

const Button = (props) => {
  const { text, onClick } = props;

  return (
    <div className={style.button} onClick={onClick}>
      {text}
    </div>
  );
};

Button.propTypes = {
  text: string,
  onClick: func
};

Button.defaultProps = {
  text: '',
  onClick: () => {}
};

export default Button;

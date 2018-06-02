import React from 'react';
import { string, func } from 'prop-types';

const TestComp = (props) => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

TestComp.propTypes = {
  text: string,
  onClick: func
};

TestComp.defaultProps = {
  text: '',
  onClick: () => {}
};

export default TestComp;

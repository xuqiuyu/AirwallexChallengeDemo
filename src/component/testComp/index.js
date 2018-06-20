import React, { Component as C } from 'react';
import { string, func } from 'prop-types';

class TestComp extends C {
  constructor(props) {
    super(props);
    this.state = {
      showExtraInfo: false
    };
  }

  render() {
    const { text, onClick } = this.props;
    const { showExtraInfo } = this.state;

    return (
      <div>
        <button className='test' onClick={onClick}>
          {text}
        </button>
        {
        showExtraInfo ? <div className='test_hidden'>Something hidden here ...</div> : ''
      }
      </div>
    );
  }
}

TestComp.propTypes = {
  text: string,
  onClick: func
};

TestComp.defaultProps = {
  text: '',
  onClick: () => {}
};

export default TestComp;

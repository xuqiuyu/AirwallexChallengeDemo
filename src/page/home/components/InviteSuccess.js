import React from 'react';
import { func } from 'prop-types';
import * as style from './inviteForm.scss';

const InviteSuccess = ({ onOk }) => (
  <div className={style.inviteForm}>
    <div className={style.title}>
      <div>All done!</div>
      <hr />
    </div>
    <p>You will be one of the first to experience </p>
    <p>Broccoli & Co. when we launch.</p>
    <button className={style.submitButton} onClick={onOk}>OK</button>
  </div>
);


InviteSuccess.propTypes = {
  onOk: func
};


InviteSuccess.defaultProps = {
  onOk: () => {}
};

export default InviteSuccess;


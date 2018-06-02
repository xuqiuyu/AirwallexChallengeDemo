import React from 'react';
import { object, bool, func } from 'prop-types';
import * as style from './modal.scss';

const Modal = (props) => {
  const { visiability, children, onMaskClick } = props;

  return (
    <div className={visiability ? style.modal : style.modalHidden} onClick={onMaskClick} key='modalMask'>
      {
        children
      }
    </div>
  );
};

Modal.propTypes = {
  children: object,
  visiability: bool,
  onMaskClick: func
};

Modal.defaultProps = {
  children: {},
  visiability: false,
  onMaskClick: () => {}
};

export default Modal;

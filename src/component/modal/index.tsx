import * as React from 'react';
const style = require('./modal.scss');

export interface Props {
    visiability: boolean;
    children: any;
    onMaskClick: any
}

const Modal = ({ visiability, children, onMaskClick } : Props) => (
  <div className={visiability ? style.modal : style.modalHidden} onClick={onMaskClick} key='modalMask'>
    {
      children
    }
  </div>
);


export default Modal;

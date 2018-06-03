import React, { Component as C } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '../../component';
import InviteForm from './components/InviteForm';
import InviteSuccess from './components/InviteSuccess';
import * as style from './home.scss';
import { showModal, hideModal, toggleLoading } from '../../redux/action';
import { inviteRequest, hideSuccessMsg, clearInviteError } from './moduleRedux/action';

class Home extends C {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMaskClick = this.handleMaskClick.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  handleSubmit(values) {
    this.props.toggleLoading();
    const { name, email } = values;
    this.props.inviteRequest({
      name,
      email
    });
  }

  handleClick() {
    this.props.showModal();
  }

  handleMaskClick() {
    const { loading, inviteSuccess } = this.props;
    if (!loading && !inviteSuccess) {
      this.props.hideModal();
      this.props.clearInviteError();
    }
  }

  handleOk() {
    this.props.hideModal();
    this.props.hideSuccessMsg();
    this.props.clearInviteError();
  }

  render() {
    const {
      modalVisiability, loading, inviteSuccess, inviteError
    } = this.props;
    return (
      <div className={style.home}>
        <section>A better way</section>
        <section>to enjoy every day.</section>
        <p>Be the first to know when we launch.</p>
        <Button
          text='Request an invite'
          onClick={this.handleClick}
        />
        <Modal
          visiability={modalVisiability}
          onMaskClick={this.handleMaskClick}
        >{
          modalVisiability ?
            <div className={style.inviteForm} onClick={(e) => { e.stopPropagation(); }}>
              {
          !inviteSuccess ?
            <InviteForm
              onSubmit={this.handleSubmit}
              loading={loading}
              inviteError={inviteError}
            /> :
            <InviteSuccess
              onOk={this.handleOk}
            />
        }
            </div> : <div />
        }
        </Modal>
      </div>
    );
  }
}

export default connect(
  (state) => {
    const {
      common: {
        modalVisiability, loading
      },
      homePage: {
        inviteSuccess,
        inviteError
      }
    } = state;
    return ({
      modalVisiability,
      loading,
      inviteSuccess,
      inviteError
    });
  }, {
    showModal,
    hideModal,
    toggleLoading,
    inviteRequest,
    hideSuccessMsg,
    clearInviteError
  }
)(Home);

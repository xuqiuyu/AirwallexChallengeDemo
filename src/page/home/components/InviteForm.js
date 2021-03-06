import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, bool, string, object } from 'prop-types';
import * as style from './inviteForm.scss';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required!';
  } else if (values.name.length < 3) {
    errors.name = 'Name length at least 3 characters long!';
  }
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!';
  }
  if (!values.confirmEmail) {
    errors.confirmEmail = 'ConfirmEmail is required!';
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'ConfirmEmail must be same with email!';
  }
  return errors;
};

const renderField = ({
  input, placeholder, type, meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={placeholder} type={type} style={{ borderColor: touched && error ? 'red' : '' }} />
      {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const InviteForm = ({
  handleSubmit, loading, inviteError
}) => (
  <form onSubmit={handleSubmit}>
    <div className={style.inviteForm}>
      <div className={style.title}>
        <div>Request an invite</div>
        <hr />
      </div>
      <div>
        <Field name='name' component={renderField} type='text' placeholder='Full name' />
      </div>
      <div>
        <Field name='email' component={renderField} type='text' placeholder='Email' />
      </div>
      <div>
        <Field name='confirmEmail' component={renderField} type='text' placeholder='Confirm email' />
      </div>
      <button type='submit' className={style.submitButton} disabled={loading}>
        {
          !loading ? 'Send'
           :
          <div>
            <div className={style.spinner}>
              <div className={style.bounce1} />
              <div className={style.bounce2} />
              <div />
            </div>
            <div>Sending, please wait ... </div>
          </div>
        }
      </button>
      {
        inviteError ?
          <div className={style.errorMsg}>{inviteError}</div>
        : ''
      }
    </div>
  </form>

);


InviteForm.propTypes = {
  handleSubmit: func,
  loading: bool,
  inviteError: string
};

InviteForm.defaultProps = {
  handleSubmit: () => {},
  loading: false,
  inviteError: ''
};


renderField.propTypes = {
  input: object,
  placeholder: string,
  type: string,
  meta: object
};

renderField.defaultProps = {
  input: {},
  placeholder: '',
  type: '',
  meta: {}
};


export default reduxForm({
  form: 'homeRequest',
  validate
})(InviteForm);


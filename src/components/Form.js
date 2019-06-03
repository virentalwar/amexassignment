import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="adsId"
          type="text"
          component={this.renderInput}
          label="ADS ID"
        />
        <Field
          name="password"
          type="password"
          component={this.renderInput}
          label="Password"
        />
        <button className="ui button primary">Login</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.adsId) {
    errors.adsId = 'You must enter a ADS ID.';
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password.';
  }

  return errors;
};

export default reduxForm({ form: 'loginForm', validate })(Form);

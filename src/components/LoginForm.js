import React from 'react';
import history from '../history';
import { connect } from 'react-redux';
import { validateUser, username } from '../actions';
import Form from './Form';

class LoginForm extends React.Component {
  onSubmit = formValues => {
    this.props.validateUser(formValues);
    this.props.username(formValues.adsId);
  };

  renderContent() {
    if (this.props.isSignedIn === false) {
      return (
        <h3 className="ui error message">Please Enter the Correct Details</h3>
      );
    } else if (this.props.isSignedIn === true) {
      history.push('/user');
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.login };
};

export default connect(
  mapStateToProps,
  { validateUser, username }
)(LoginForm);

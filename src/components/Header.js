import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';
import { signOut, modalShow, modalHide } from '../actions';

class Header extends React.Component {
  componentDidMount() {
    this.props.modalHide();
    console.log(this.props.login);
  }

  handleClose = () => {
    this.props.modalHide();
    this.props.signOut();
  };

  handleShow = () => {
    this.props.modalShow();
  };

  logoutHome = () => {
    this.props.signOut();
  };

  renderLogin() {
    if (this.props.login === null || this.props.login === false) {
      return (
        <button
          className="btn btn-outline-light my-2 my-sm-0"
          onClick={this.handleShow}
        >
          Login
        </button>
      );
    } else if (this.props.login === true) {
      return (
        <Link
          className="btn btn-outline-light my-2 my-sm-0"
          to={'/'}
          onClick={this.logoutHome}
        >
          Logout
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-info">
          <Link
            to={'/'}
            className="navbar-brand text-white"
            onClick={this.logoutHome}
          >
            Dashboard
          </Link>
          {this.renderLogin()}
        </nav>

        <Modal show={this.props.modal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { modal: state.modal, login: state.login };
};

export default connect(
  mapStateToProps,
  { signOut, modalShow, modalHide }
)(Header);

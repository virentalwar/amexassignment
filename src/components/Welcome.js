import React from 'react';
import { connect } from 'react-redux';
import { modalHide, username } from '../actions';

class Welcome extends React.Component {
  componentDidMount() {
    this.props.modalHide();
  }

  componentDidUpdate() {
    this.props.modalHide();
  }

  renderContent() {
    if (this.props.login === true) {
      return (
        <div style={{ height: 'calc(100vh - 95px)' }}>
          <br />
          <h2 className="ui success message">Logged In successfully</h2>
          <h1>Hello, {this.props.user}</h1>
        </div>
      );
    } else {
      return (
        <div style={{ height: 'calc(100vh - 95px)' }}>
          <br />
          <h2 className="ui error message">
            Please Login to view this content.
          </h2>
        </div>
      );
    }
  }

  render() {
    return <div className="ui container">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  return { user: state.user, login: state.login };
};

export default connect(
  mapStateToProps,
  { modalHide, username }
)(Welcome);

import React from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import * as actions from '../actions';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: '',
        password: '',
        confirmation_password: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();

  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form form-style">
          <form onSubmit={this.handleSubmit}>
            <div className="ui left icon input">
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
              <i className="user icon"></i>
            </div>
            <br/>
            <div className="ui left icon input">
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
              <i className="lock icon"></i>
            </div>
            <br/>
            <div className="ui left icon input">
              <input
                name="confirmation password"
                type="confirmation password"
                placeholder="confirmation password"
                value={fields.confirmation_password}
                onChange={this.handleChange}
              />
              <i className="lock icon"></i>
            </div>
            <br />
            <div className="ui left icon input">
              <input
                name="email"
                type="text"
                placeholder="email"
                value={fields.email}
                onChange={this.handleChange}
              />
              <i className="lock icon"></i>
            </div>
            <br />
            <button type="submit" className="ui basic green button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);

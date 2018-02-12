import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { username, password } } = this.state;
    this.props.loginUser(username, password, this.props.history);
  };

  render() {
    const { fields } = this.state;
    return (
      <div >
        {this.state.error ? <h1>Try Again</h1> : null}
          <form className="form-style" onSubmit={this.handleSubmit}>
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
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));

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
        {this.props.error ? <div className="ui blue camera message">{this.props.error}</div> : null}
          <form className="form-style" onSubmit={this.handleSubmit}>
            <div className="ui left icon input">
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              required/>
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
              required/>
              <i className="lock icon"></i>
            </div>
            <br/>
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
          <div className="ui inverted vertical footer segment">
            <div className="ui center aligned container">
            <div className="ui three column grid">
                <div className="column">
                </div>
                <div className="column">
                <a href="/about" className="circular ui large icon blue basic button">
                  <i className="help large icon "></i>
                </a>
                </div>
                <div className="column">
                </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("in login", state);
  return {
    error: state.auth.login_error
  }
}

export default withRouter(connect(mapStateToProps, actions)(Login));

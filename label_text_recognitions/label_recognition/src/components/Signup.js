import React from 'react';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      username: '',
      password: '',
      confirmation_password: '',
      email: ''
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser();
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.password === this.state.confirmation_password) {
      this.props.addUser({password: this.state.password, email: this.state.email, username:this.state.username}, this.props.history)
      // debugger
      this.props.loginUser(this.state.username, this.state.password, this.props.history)
    }
    else{
      this.setState({error: true})
    }

  };

  render() {
    return (
      <div>
      {(this.state.error) ? <div className="ui blue camera message">Your passwords do not match. Try again!</div> : null}
        <div className="ui form form-style">
          <form onSubmit={this.handleSubmit}>
            <div className="ui left icon input">
              <input
                name="username"
                placeholder="username"
                value={this.props.username}
                onChange={this.handleChange}
                required
              />
              <i className="user icon"></i>
            </div>
            <br/>
            <div className="ui left icon input">
              <input
                name="password"
                type="password"
                placeholder="password"
                value={this.props.password}
                onChange={this.handleChange}
                required
              />
              <i className="lock icon"></i>
            </div>
            <br/>
            <div className="ui left icon input">
              <input
                name="confirmation_password"
                type="password"
                placeholder="confirmation password"
                value={this.props.confirmation_password}
                onChange={this.handleChange}
                required
              />
              <i className="lock icon"></i>
            </div>
            <br />
            <div className="ui left icon input">
              <input
                name="email"
                type="text"
                placeholder="email"
                value={this.props.email}
                onChange={this.handleChange}
                required
              />
              <i className="mail icon"></i>
            </div>
            <br />
            <button type="submit" className="ui basic green button">
              Sign Up
            </button>
          </form>
        </div>
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
  console.log("in signup", state)
  return{

  }
}
export default withRouter(connect(mapStateToProps, actions)(Signup));

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  render(){
  return(
    <div>
    {this.props.loggedIn ? (
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu">
      <Link to={`/${this.props.name}`} className="item">
        <h2 className="ui blue header">
          THRIFTY
        </h2>
      </Link>

        <Link to={`/${this.props.name}/images`} className="header item">
        <div className="ui inverted icon">
            <i className="image big icon "></i>
        </div>
      </Link>

        <Link to={`/${this.props.name}/settings`} className="right menu">
        <div className="ui inverted icon rigth menu">
            <i className="settings large icon "></i>
        </div>
      </Link>
        <a className="right menu"
        onClick={e => {
          e.preventDefault();
          this.props.logoutUser(this.props.history);
        }}
      >
        Sign Out
      </a>
      </div>
    </div>

    ) : (
      <div>
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu">
        <Link to="/login" className="item">
          <h2 className="ui blue header">
            THRIFTY
          </h2>
        </Link>
      <Link className="right menu" to="/login">Login</Link>
      <Link className="right menu" to="/signup">Signup</Link>
      </div>
      </div>
      </div>
    )}

      </div>
  )
}
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  name: state.auth.currentUser.username
});

export default withRouter(connect(mapStateToProps, actions)(Navbar));

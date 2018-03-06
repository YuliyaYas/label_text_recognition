import React from 'react';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Settings extends React.Component {

  handlePasswordChange = (e) => {
    e.preventDefault();
  }

  handleUsernameChange = (e) => {
    e.preventDefault();
  }

  handleEmailChange = (e) => {
    e.preventDefault();
  }

  handleDelete = (e) => {
    e.preventDefault();
    alert(this.props.id)
    this.props.deleteAUser(this.props.id)

  }

  render() {
  return (
    <div>
    <p className="center-text ui horizontal divider" onClick={()=>
      {
      const x = document.getElementById("toggle-form");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
      }
    }>change password</p>
    <div id="toggle-form">
    <form onSubmit={this.handlePasswordChange} className="toggle-form-style">
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="old password"  />
        <i className="lock icon"></i>
      </div>
      <br/>
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="new password"  />
        <i className="lock icon"></i>
      </div>
      <br/>
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="confirm password"  />
        <i className="lock icon"></i>
      </div>
      <br/>
      <button type="submit" className="ui basic green button">
        Update
      </button>
    </form>
    </div>
    <p className="center-text ui horizontal divider" onClick={()=>
      {
      const x = document.getElementById("toggle-form-1");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
      }
    }>change username</p>
    <div id="toggle-form-1">
    <form onSubmit={this.handleUsernameChange} className="toggle-form-style">
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="old username"  />
        <i className="user icon"></i>
      </div>
      <br/>
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="new username"  />
        <i className="user icon"></i>
      </div>
      <br/>
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="confirm username"  />
        <i className="user icon"></i>
      </div>
      <br/>
      <button type="submit" className="ui basic green button">
        Update
      </button>
    </form>
    </div>
    <div>
    <p className="center-text ui horizontal divider" onClick={()=>
      {
      const x = document.getElementById("toggle-form-2");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
      }
    }>change email</p>
    <div id="toggle-form-2">
    <form onSubmit={this.handleEmailChange} className="toggle-form-style">
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="old email"  />
        <i className="mail icon"></i>
      </div>
      <br/>
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="new email"  />
        <i className="mail icon"></i>
      </div>
      <br/>
      <div className="ui left icon input">
        <input name="password" type="password" placeholder="confirm email"  />
        <i className="mail icon"></i>
      </div>
      <br/>
      <button type="submit" className="ui basic green button">
        Update
      </button>
    </form>
    </div>
    <p className="center-text ui horizontal divider" onClick={()=>
      {
      const x = document.getElementById("toggle-form-3");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
      }
    }>DELETE PROFILE</p>
    <div id="toggle-form-3">
    <form onSubmit={this.handleDelete} className="toggle-form-style">
      <p className="blue-color">Ones you delete the profile you will not be able to renew it</p>
      <button type="submit" className="ui red green button">
        DELETE
      </button>
    </form>
    </div>
    </div>
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
      <div className="ui two column grid">
          <div className="column">
          <a href={`/${this.props.name}/images`} className="circular ui large icon blue basic button">
            <i className="grid layout icon"></i>
          </a>
          </div>
          <div className="column">
          <a href={`/${this.props.name}`} className="circular ui large icon blue basic button">
            <i className="camera retro icon"></i>
          </a>
          </div>
          </div>
      </div>
    </div>
    </div>

  )
}
}
const mapStateToProps = (state) => {
  console.log("in settings", state);
  return {
    name: state.auth.currentUser.username,
    id: state.auth.currentUser.id
  }
}

export default withAuth(connect(mapStateToProps, actions)(Settings));

import React from 'react';
import withAuth from '../hocs/withAuth';

class Settings extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
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
    <form onSubmit={this.handleSubmit} className="toggle-form-style">
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
    <form onSubmit={this.handleSubmit} className="toggle-form-style">
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
    <form onSubmit={this.handleSubmit} className="toggle-form-style">
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

    </div>
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
      <div className="ui two column grid">
          <div className="column">
          <a href={`/y/images`} className="circular ui large icon blue basic button">
            <i className="grid layout icon"></i>
          </a>
          </div>
          <div className="column">
          <a href="/y"className="circular ui large icon blue basic button">
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

export default withAuth(Settings);

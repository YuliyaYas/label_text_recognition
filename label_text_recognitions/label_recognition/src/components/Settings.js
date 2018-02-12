import React from 'react';
import withAuth from '../hocs/withAuth'

class Settings extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit} className="form-style">
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
        Update password
      </button>
    </form>
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

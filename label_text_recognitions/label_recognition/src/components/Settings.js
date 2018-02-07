import React from 'react';
import withAuth from '../hocs/withAuth'

class Settings extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
  return (
    <form onSubmit={this.handleSubmit}>
        <label></label>
      <br/>
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

  )
}
}

export default withAuth(Settings);

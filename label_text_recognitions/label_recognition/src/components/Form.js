import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom'


class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.text,
      price: '',
      store: '',
      note: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return { [name]: value };
    }, () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, price, store, note} = this.state
    this.props.addImage({name, price, store, note, blob: this.props.image, otr: this.props.text, user_id: this.props.id}, this.props.history, this.props.name)
  }

render(){
  return(
    <div>
    <form className="ui large center form"  onSubmit={this.handleSubmit}>
      <div className="ui internally celled grid">
          <div className="row">
            <div className="five wide column">
              <img className="percentage-size" width="130" height="130" alt="" src={this.props.image}/>
            </div>
          <div className="eleven wide column">
            {/*<div className="ui fluid left icon input" onChange={this.handleChange}>
              <input
                placeholder="image name"
                value={this.state.name}
                name="name"></input>
              <i className="write icon"></i>
            </div>*/}
            <div className="ui fluid left icon input" onChange={this.handleChange}>
              <input
                placeholder="price"
                name="price"/>
              <i className="dollar icon"></i>
            </div>
            <div className="ui fluid left icon input" onChange={this.handleChange}>
              <input
                placeholder="store location"
                name="store"></input>
              <i className="marker icon"></i>
            </div>
          </div>
        </div>
      </div>
        <div className="ui fluid left icon input" onChange={this.handleChange}>
          <textarea
            placeholder="notes"
            name="note" />
          <i className="write icon"></i>
        </div>
          <div className="field" />
          <div className=" camera">
          <button className="ui green button" type="submit">
            SAVE
          </button>
          </div>
        </form>
    </div>
  )
 }
}

const mapStateToProps = (state) => {
  // console.log("state in FORM",state)
  return {
    newImage: state.newImage,
    name: state.auth.currentUser.username,
    id: state.auth.currentUser.id,
    text: state.imageText.imageText

  }
}

export default withAuth(withRouter(connect(mapStateToProps, actions)(Form)));

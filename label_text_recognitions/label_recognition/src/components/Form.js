import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import withAuth from '../hocs/withAuth'

class Form extends React.Component {
  constructor(props){
    super(props)
    console.log("in form", props);
    this.state = {
      name: '',
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
    this.props.addImage({name, price, store, note, blob: this.props.image, otr: this.props.text, user_id: 4}, ()=> console.log("after submit ",this.props))
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
            <div className="ui fluid left icon input" onChange={this.handleChange}>
              <input
                placeholder="image name"
                name="name"/>
              <i className="write icon"></i>
            </div>
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
          <button className="ui green button" type="submit" onClick={this.ha}>
            SAVE
          </button>
        </form>
    </div>
  )
 }
}

const mapStateToProps = (state) => {
  return {
    newImage: state.newImage
  }
}

export default withAuth(connect(mapStateToProps, actions)(Form));

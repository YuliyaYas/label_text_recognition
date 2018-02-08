import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import results from './searchres';
import SearchResult from './SearchResult';
import Form from './Form';
import withAuth from '../hocs/withAuth';


class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      results,
      clicked: false
    }
  }

  handleSave = (e) => {
    e.preventDefault()
    this.setState({clicked: true})
  }

render(){
  debugger
  const results = this.props.googleSearch
  const searchResults = results.map((r,i) => <SearchResult key = {i} result={r} />)
  return(
  <div>
  {this.state.clicked ? <Form text={this.props.imageText.imageText} image={this.props.img.img}/> :
    <div>
    <div className="ui grid">
      <div className=" row">
        <div className="three wide column">
          <img width="60" height="60" alt="" src={this.props.img.img}/>
        </div>
        <div className="nine wide column">
          <h3>Results that matches:</h3>
          <p>{this.props.imageText.imageText}</p>
        </div>
        <div className="three wide column">
          <br/>
          <button type="submit" className="ui basic green button" onClick={this.handleSave}>Save</button>
        </div>
      </div>
    </div>
    <div className="scroll">
      <ul>{searchResults}</ul>
    </div>
    </div>
  }
  </div>

  )
}}

const mapStateToProps = (state) => {
  // console.log("state",state);
  return {
    googleSearch: state.googleSearch,
    img: state.img,
    imageText: state.imageText
  }
}

export default withAuth(connect(mapStateToProps, actions)(Search));

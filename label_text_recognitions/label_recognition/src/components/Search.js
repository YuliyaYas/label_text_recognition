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
  const results = this.props.googleSearch
  const searchResults = results.map((r,i) => <SearchResult key = {i} result={r} />)
  console.log("in search", this.props)
  return(
  <div>
  {this.state.clicked ?
    <div>
      <Form text={this.props.imageText.imageText} image={this.props.img.img}/>
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
    :
    <div>
    <div className="scroll">
      {searchResults}
    </div>
    <div className="ui grid">
      <div className="row">
      <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
        <div className="ui three column grid">
            <div className="column">
            <a href="/y/images" className="circular ui large icon blue basic button" onClick={this.capture}>
              <i className="undo icon"></i>
            </a>
            </div>
            <div className="column">
            <a href="/y" className="circular ui large icon blue basic button" onClick={this.capture}>
              <i className="grid layout icon"></i>
            </a>
            </div>
            <div className="column">
              <button type="submit" className="ui basic green button" onClick={this.handleSave}>Save</button>
            </div>
            </div>


        </div>
      </div>

    }
      </div>
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

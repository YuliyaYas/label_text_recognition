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
  // console.log("in search", this.props)
  return(
  <div>
  {this.state.clicked ? <Form text={this.props.imageText.imageText} image={this.props.img.img}/> :
    <div>
    <div className="twelve wide column">
      { this.props.imageText
        ?
       <div>
       {/*<p className="p-search" >Results that matches: {this.props.imageText.imageText.toLowerCase()}</p>*/}
       </div>
       : ""}

    </div>
    <div className="scroll">
      {searchResults}
    </div>
    <div className="ui grid">
      <div className="row">

]      </div>
    </div>

    </div>
  }
  <div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
    <div className="ui three column grid">
        <div className="column">
        </div>
        <div className="column">
          { this.props.imageText ? <button type="submit" className="ui basic green button" onClick={this.handleSave}>Save</button>  : <a href="/y/images"><i className="undo large icon"/></a>}
        </div>
        <div className="column">
        </div>
        </div>
    </div>
  </div>
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

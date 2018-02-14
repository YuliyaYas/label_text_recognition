import React from 'react';
import withAuth from '../hocs/withAuth';
import ImageCard from './ImageCard';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Images extends React.Component{
  constructor(){
    super()
  }

  componentDidMount() {
      this.props.fetchImages(this.props.id)
  }

  render(){
    console.log("in img ", this.props.images);
  return(
    <div>
      { this.props.images
        ?
      <div className="scroll-img">
      {(this.props.images.length === 0) ? "0" : this.props.images.map((image, i) => <ImageCard image={image} key={i} name={this.props.name}/>)}

      </div>
      :
      "Loading..."
    }
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
      <div className="ui three column grid">
          <div className="column">
          </div>
          <div className="column">
          <a href={`${this.props.name}`} className="circular ui large icon blue basic button">
            <i className="camera retro icon"></i>
          </a>
          </div>
          <div className="column">
          </div>
          </div>
      </div>
    </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  // console.log("in images", state);
  return {
    images: state.images,
    name: state.auth.currentUser.username,
    id: state.auth.currentUser.id
  }
}

export default withAuth(connect(mapStateToProps, actions)(Images))

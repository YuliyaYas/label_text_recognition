import React from 'react';
import withAuth from '../hocs/withAuth';
import ImageCard from './ImageCard';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Images = (props) => {
  return(
    <div>
      { props.images
        ?
      <div className="scroll-img">
        {props.images.map((image, i) => <ImageCard image={image} key={i} name={props.name}/>)}
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
          <a href={`${props.name}`} className="circular ui large icon blue basic button">
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

const mapStateToProps = (state) => {
  // console.log("in images", state);
  return {
    images: state.images,
    name: state.auth.currentUser.username
  }
}

export default withAuth(connect(mapStateToProps, actions)(Images))

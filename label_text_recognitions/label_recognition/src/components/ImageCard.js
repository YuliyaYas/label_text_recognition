import React from 'react'
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux';
import * as actions from '../actions';

const ImageCard = (props) => {
  console.log(props);
  return(
    <div className="maxImageTile imgTile">
      <div className="maxBackgroundSneak">
          <img
          src={props.image.blob} width="150" height="150" alt=""/>
          <p>{props.image.otr}</p>
      </div>
      <button id={props.image.id} className="ui red basic button" type="submit" onClick={() => props.deleteImg(props.image.id)}>delete</button>
    </div>)
}

export default withAuth(connect(null, actions)(ImageCard));

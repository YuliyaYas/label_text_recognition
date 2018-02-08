import React from 'react'
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux';
import * as actions from '../actions';


const ImageCard = (props) => {
  return(
    <div className="maxImageTile imgTile" id={props.image.otr} onClick={(e) => console.log(e.target.id)}>
      <div className="maxBackgroundSneak" id={props.image.otr}>
          <img
          src={props.image.blob} width="150" height="150" alt="" id={props.image.otr}/>
          <p>{props.image.otr}</p>
      </div>
      <button id={props.image.id} className="ui red basic button" type="submit" onClick={() => props.deleteImg(props.image.id)}>delete</button>
    </div>)
}

export default withAuth(connect(null, actions)(ImageCard));

import React from 'react'
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';



const ImageCard = (props) => {
  console.log("in card", props);
  return(
    <div className="maxImageTile imgTile" id={props.image.otr} onClick={(e) => props.fetchSearchresult(props.image.name, props.history, "y")}>
      <div className="maxBackgroundSneak" id={props.image.otr}>
          <img
          src={props.image.blob} width="150" height="150" alt="" id={props.image.otr}/>
      </div>
      <button id={props.image.id} className="ui red basic button" type="submit" onClick={() => props.deleteImg(props.image.id)}>delete</button>
    </div>)
}

export default withAuth(withRouter(connect(null, actions)(ImageCard)));

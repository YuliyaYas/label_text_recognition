import React from 'react'
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';



const ImageCard = (props) => {
  console.log("in card", props);
  return(
    <div className="ui segment-1 clearfix" id={props.image.otr} onClick={(e) => props.fetchSearchresult(props.image.name, props.history, "y")}>
    <button className="delete" id={props.image.id} type="submit" onClick={() => props.deleteImg(props.image.id)}>x</button>
    <div >
      <img className="img-captured" src={props.image.blob} width="100" height="100" alt="" id={props.image.otr}/>
      <p>{props.image.otr}</p>
      <p>{props.image.note}</p>
    </div>
  </div>)
}

export default withAuth(withRouter(connect(null, actions)(ImageCard)));

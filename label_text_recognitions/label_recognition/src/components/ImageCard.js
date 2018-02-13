import React from 'react';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';



const ImageCard = (props) => {
  // console.log(props.name);
  return(
    <div className="ui segment-1 clearfix" id={props.image.otr} >
    <div >
    <i className="grey delete icon" id={props.image.id} type="submit" onClick={() => props.deleteImg(props.image.id)}></i>
      <img className="img-captured" src={props.image.blob} width="100" height="100" alt="" id={props.image.otr} onClick={(e) => props.fetchSearchresult(props.image.name, props.history, props.name)}/>
      {(props.image.price === "")
      ?
      <p className="first-letter" onClick={(e) => props.fetchSearchresult(props.image.name, props.history, props.name)}>{props.image.otr.toLowerCase()}</p>
      : <p className="first-letter" onClick={(e) => props.fetchSearchresult(props.image.name, props.history, props.name)}>{props.image.otr.toLowerCase()} - ${props.image.price}</p>}
      <p className="first-letter">{props.image.store}</p>
      <p onClick={(e) => props.fetchSearchresult(props.image.name, props.history, props.name)}>{props.image.note}</p>
    </div>
  </div>)
}

export default withAuth(withRouter(connect(null, actions)(ImageCard)));

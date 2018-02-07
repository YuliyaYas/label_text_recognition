import React from 'react'
import withAuth from '../hocs/withAuth'
import ImageCard from './ImageCard'
import { connect } from 'react-redux';
import * as actions from '../actions'

const Images = (props) => {
  console.log("in imgs", props)
  return(
    <div>
      { props.images
        ?
      <div className="indexWrapper">
        {props.images.map((image, i) => <ImageCard image={image} key={i} />)}
      </div>
      :
      "NONE"
    }
    </div>)
}

const mapStateToProps = (state) => {
  console.log("state in images",state.images);
  return {
    images: state.images
  }
}

export default withAuth(connect(mapStateToProps, actions)(Images))

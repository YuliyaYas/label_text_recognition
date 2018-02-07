import React from 'react'
import withAuth from '../hocs/withAuth'


const ImageCard = (props) => {
  return(
    <div className="maxImageTile imgTile">
      <div className="maxBackgroundSneak">
          <img
          src={props.image.blob} width="150" height="150" alt=""/>
          <p>{props.image.otr}</p>
      </div>
    </div>)
}
export default withAuth(ImageCard)

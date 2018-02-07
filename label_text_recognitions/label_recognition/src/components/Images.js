import React from 'react'
import withAuth from '../hocs/withAuth'
import ImageCard from './ImageCard'

const Images = (props) => {
  const images = props.images.map((image, i) => <ImageCard image={image} key={i} />)
  return(

      <div className="indexWrapper">
        {images}
      </div>)
}
export default withAuth(Images)

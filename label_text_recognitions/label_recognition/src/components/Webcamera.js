import React, { Component } from 'react';
import Webcam from 'react-webcam';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth'

 class Webcamera extends Component {
  constructor(){
    super()
    this.state={
      clicked: false
    }
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = (e) => {
    e.preventDefault();
    const imageSrc = this.webcam.getScreenshot();
    this.props.saveImage(imageSrc)
    this.setState({clicked: true}, () => {this.decodeImage()})
  };

  decodeImage = () => {
    const matches = this.props.img.img.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
  }

  refreshPage(){
    window.location.pathname = '/y';
  }

  search = (e) => {
    e.preventDefault()
    const blob = this.props.img.img.split("data:image/jpeg;base64,").pop()
    var b=JSON.stringify({"requests":
    [{  "image":{
        "content": `${blob}`
      },
      "features":
      [{"type":"TEXT_DETECTION","maxResults":5}]
    } ]});
    var request=new XMLHttpRequest;

    request.open("POST","https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCizOna-G-NzGSF-ei27xZX9C-7RhBNYZA",!0);
    request.send(b)
    request.onload = () => {
      const jsonObj = JSON.parse(request.responseText)
      const imageText = jsonObj.responses[0].textAnnotations[0].description
      this.props.saveImageText(imageText)
      this.props.fetchSearchresult(imageText, this.props.history, this.props.user)
      {/*      console.log("SEARCH RESULTS", this.props.fetchSearchresult(imageText));
*/}
    };
  }

  searchText = (term) => {

    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDhhXqmdbAzvQfW2jHIoBFRC1aT4YxUTtw&cx=009282617174261836569:hstwd4mledu&q=${term}`)
    .then(resp => resp.json())
    .then(json =>
      {
      this.props.searchResults(json.items)
      this.props.history.push(`/${this.props.user}/search`)
    }
)

  }

  render() {
    console.log("search", this.props);
    return (
      <div>
        {this.state.clicked ? <img alt="" className="capture-position" src={this.props.img.img} /> : <Webcam
          id="content"
          className="camera"
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        /> }
        <br />

        {this.state.clicked
          ?
          <div className="camera">
          <button className="circular ui huge icon red basic button" onClick={this.refreshPage}>
            <i className="undo red icon"></i>
          </button>
          <Link to={`/${this.props.user}/search`} className="circular ui huge icon green basic button" onClick={this.search}>
            <i className="search green icon"></i>
          </Link>
          </div>
          :
          <div className="camera">
          <button className="circular ui massive icon blue basic button" onClick={this.capture}>
            <i className="camera retro icon"></i>
          </button>
          </div>
        }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("in web", state);
  return {
    img: state.img,
    imageText: state.imageText,
    user: state.auth.currentUser.username
  }
}

export default withAuth(connect(mapStateToProps, actions)(Webcamera));

import { combineReducers } from 'redux';


const initialState = { currentUser: {} };
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, username } = action.user;
      return { ...state, currentUser: { id, username} };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    case 'LOGIN_ERROR':
      return {...state, currentUser: {}, login_error: true}
    default:
      return state;
  }
};

const saveNewImage = (state = null, action) => {
  switch(action.type){
    case 'SAVE_IMAGE':
      return {img: action.img}
    default:
     return state
  }
}

const saveSearchInfo = (state = null, action) => {
  switch(action.type){
    case 'SAVE_RESULTS':
      return {googleSearch: action.results}
    default:
     return state
  }

}

const saveImageTextResult = (state = null, action) => {
  switch(action.type){
    case 'SAVE_IMAGE_TEXT':
      return {imageText: action.text}
    default:
     return state
  }
}
const addImage = (state = [], action) => {
  switch(action.type){
    case 'POST_IMAGE':
      return [...state, action.image]
    default:
     return state
  }
}

const getAllImages = (state = null, action) => {
  switch(action.type){
    case 'SET_CURRENT_IMAGES':
      return action.images
    default:
     return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  img: saveNewImage,
  googleSearch: saveSearchInfo,
  imageText: saveImageTextResult,
  newImage: addImage,
  images: getAllImages

})


export default rootReducer;

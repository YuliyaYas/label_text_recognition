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
      return {...state, currentUser: {}, login_error: action.errors};
    case 'POST_USER':
      return {...state, user: action.user}
    case 'DELETE_USER':
      const users = state.filter(user => user.id !== action.user.id)
      return users
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

const getAllImages = (state = null, action) => {
  switch(action.type){
    case 'SET_CURRENT_IMAGES':
      return action.images
    case 'DELETE_IMAGE':
      const images = state.filter(image => image.id !== action.image.id)
      return images
    case 'POST_IMAGE':
      return [action.image]
    default:
     return state
  }
}

const getAllSearches = (state = [], action) => {
  switch(action.type){
    case 'SET_SEARCH_RESULTS':
      return action.results
    case 'SEARCH_ERROR':
      return action.errors
    default:
     return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  img: saveNewImage,
  googleSearch: getAllSearches,
  imageText: saveImageTextResult,
  images: getAllImages
})


export default rootReducer;

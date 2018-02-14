import { adapter } from '../services';

export const saveImage = (img) => {
  return {type: 'SAVE_IMAGE', img}
}
export const saveImageText = (text) => {
  return {type: 'SAVE_IMAGE_TEXT', text}
}

export const searchResults = (results) => {
  return {type: 'SAVE_RESULTS', results}
}

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', user });
  });
};

export const fetchImages = (id) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getImages(id).then(images => {
    dispatch({ type: 'SET_CURRENT_IMAGES', images });
  });
};

export const fetchSearchresult = (term, history, user) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getSearchResult(term).then(results => {
    // console.log("in fetchSearchResults", results)
    dispatch({type: 'SET_SEARCH_RESULTS', results})
    history.push(`/${user}/search`)
  });
};

export const addImage = (data, history, user) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.postImage(data).then(image => {
    dispatch({ type: 'POST_IMAGE', image });
    history.push(`/${user}/images`)
  })
};

export const addUser = (data, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.postUser(data).then(user => {
    dispatch({ type: 'POST_USER', user });
    history.push(`/login`)
  })
};

export const deleteImg = (id) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.deleteImage(id).then(image => {
    dispatch({ type: 'DELETE_IMAGE', image });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.login({ username, password }).then(user => {
    if (user.error) {
      dispatch({ type: 'LOGIN_ERROR', errors: user.error });
    }
    else {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push(`/${user.username}`);
    }
  });
};

export const logoutUser = (history) => {
  localStorage.removeItem('token');
  history.push('/login')
  return { type: 'LOGOUT_USER' };
};

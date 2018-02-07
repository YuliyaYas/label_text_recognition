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

export const fetchImages = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getImages().then(images => {
    dispatch({ type: 'SET_CURRENT_IMAGES', images });
  });
};

export const addImage = (data) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.postImage(data).then(image => {
    dispatch({ type: 'POST_IMAGE', image });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.login({ username, password }).then(user => {
    if (user.error) {
      dispatch({ type: 'LOGIN_ERROR' });
      alert("WRONG HAHA")
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

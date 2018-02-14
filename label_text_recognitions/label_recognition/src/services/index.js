const API_ROOT = `http://localhost:3000/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getWithToken = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);
};

const login = data => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const postImage = data => {
  return fetch(`${API_ROOT}/images/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

const postUser = data => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

const deleteImage = id => {
  return fetch(`${API_ROOT}/images/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());
}

const deleteUser = id => {
  return fetch(`${API_ROOT}/users/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());
}

const getImages = (id) => {
  return fetch(`${API_ROOT}/users/${id}`)
  .then(res => res.json())
  .then(json => json.images)
}

const getSearchResult = (term) => {
  return fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDhhXqmdbAzvQfW2jHIoBFRC1aT4YxUTtw&cx=009282617174261836569:hstwd4mledu&q=${term}`)
  .then(resp => resp.json())
  .then(json => json.items)
}

export const adapter = {
  auth: {
    login,
    getCurrentUser,
    postImage,
    getImages,
    deleteImage,
    getSearchResult,
    postUser,
    deleteUser
  }
};

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

const getImages = () => {
  return fetch(`${API_ROOT}/users/4`)
  .then(res => res.json())
  .then(json => json.images)
}

export const adapter = {
  auth: {
    login,
    getCurrentUser,
    postImage,
    getImages
  }
};

import config from './api_config';

export async function authorizeRequest(user) {
  const url = `${config.url}/user/identify?user_id=${user.id}`;
  return fetch(url, {method: 'GET'});
}

export async function setUserImageRequest(userId, imageUrl) {
  const url = `${config.url}/user/`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        user_id: userId,
        image_url: imageUrl,
      },
    ]),
  });
}

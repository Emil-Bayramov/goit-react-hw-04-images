import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30820534-071dc1085067688ec0ddc9858';

export async function fetchImages(q, page) {
  return await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: q,
      image_type: 'photo',
      per_page: 12,
      page,
    },
  });
}

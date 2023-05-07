import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
/*const API_KEY = '34532945-6dd9e50d65c600f2d5972702b';*/
const API_KEY = '34187261-edb3bdfe414ee3b7adebeccc5';
export async function fetchImages(value, page = 1, perPage = 40) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

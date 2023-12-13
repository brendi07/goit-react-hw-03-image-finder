import axios from 'axios';
axios.defaults.baseURL = ' https://pixabay.com/api/';

export const getSearchedImages = async (searchName, page) => {
  const { data } = await axios(
    `?q=${searchName}&page=${page}&key=38012402-0faae6c95475bcc6a920104f9&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
 
import axios from 'axios';
axios.defaults.baseURL = 'https://paw-hut.b.goit.study/api';
export async function getCategories() {
  const response = await axios.get('/categories');
  return response.data;
}
export async function searchPets(categoryId, page, limit) {
  let parametrs = categoryId ? { page, limit, categoryId } : { page, limit };
  const response = await axios.get('/animals', {
    params: parametrs,
  });
  return response.data;
}

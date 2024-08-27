import axios from 'axios';
import data from '../data/data.json';

const endpoint = 'http://localhost:3112/';

export const usersApi = async () => {
  const response = await axios.get(`${endpoint}users`);
  return response.data;
}

export const loginApi = async (credentials) => {
  const user = data.users.find(user => user.email === credentials.email && user.password === credentials.password);
  if (user) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
  } else {
    throw new Error('Invalid credentials');
  }
};

export const fetchBooks = async () => {
  const response = await axios.get(`${endpoint}books`);
  return response.data;
}

export const fetchBooksById = async (id) => {
  const response = await axios.get(`${endpoint}books?id=${id}`);
  return response.data;
}

export const fetchBlogs = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log('res', response)
  return response.data;
}

export const fetchBlogsById = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
}

export const fetchMenus = async () => {
  const response = await axios.get(`${endpoint}menus`);
  return response.data;
}

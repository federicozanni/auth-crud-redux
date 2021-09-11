import axios from 'axios';

const apiProducts = axios.create({
  baseURL: 'http://localhost:4000'
})

export default apiProducts;
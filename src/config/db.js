import axios from 'axios';

const db = axios.create({
  baseURL: 'https://react-native-cafe.herokuapp.com/api'
})

db.interceptors.request.use(

  async(config) => {
    const token = window.localStorage.getItem('token');

    if (token) {
        config.headers['x-token'] = token;
    }
    
    return config;
  }
)

export default db;
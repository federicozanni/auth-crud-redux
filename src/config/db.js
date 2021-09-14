import axios from 'axios';

const db = axios.create({
  baseURL: 'https://react-native-cafe.herokuapp.com/api'
})

export default db;

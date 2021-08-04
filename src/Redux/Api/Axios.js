import axios from 'axios';

const customeAxios = axios.create({
    baseURL: 'http://localhost:4000/',
});
export default customeAxios;

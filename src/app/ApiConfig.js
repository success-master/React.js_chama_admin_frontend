import axios from 'axios';

export default axios.create({
    baseURL : "http://localhost:8888"
    // baseURL : "https://api.chamaplus.com"
})
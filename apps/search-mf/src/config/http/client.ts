import axios from 'axios';

// TODO: create abstract client
export const http = axios.create({
    baseURL: 'http://localhost:9100'
});

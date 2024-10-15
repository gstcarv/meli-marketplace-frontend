import axios from 'axios';

// TODO: create abstract client
export const http = axios.create({
    baseURL: process.env.BFF_URL
});

import axios from 'axios';

export const api = axios.create({
    baseURL: `http://${ENDERECO_IP}:4000`
})

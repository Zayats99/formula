import axios from 'axios';

// axios instance
export const axiosClient = axios.create({
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

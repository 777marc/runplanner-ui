import axios from 'axios';

const apiUrl = process.env.api_url ? process.env.api_url : 'http://localhost:8000/api/';

const getAccessToken = () => {
    return localStorage.getItem('access_token');
}

const headers = {
    'Authorization' : `Bearer ${getAccessToken()}`
}

var axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: headers
});

export const login = data => {
    return axios.post(`${apiUrl}auth/login`, data);
}

export const get = endPoint => {
    return axiosInstance.get(`${apiUrl}${endPoint}`);
}

export const post = (endPoint, data) => {
    return axiosInstance.post(`${apiUrl}${endPoint}`, data);
}

export const put = (endPoint, data) => {
    return axiosInstance.put(`${apiUrl}${endPoint}`, data);
}

export const destroy = (endPoint, id) => {
    return axiosInstance.delete(`${apiUrl}${endPoint}/${id}`)
}
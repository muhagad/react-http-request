import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // edit request config or do something before request is sent
    return request;
}, error => {
    // console.log(error);
     // Do something with request error
    return Promise.reject(error); // promise.reject(reason)
});

axios.interceptors.response.use(response => {
     // Do something with response data
    console.log(response);
    return response;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

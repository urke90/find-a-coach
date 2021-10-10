import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://find-a-coach-vue-26405-default-rtdb.firebaseio.com/'
});

export default instance;

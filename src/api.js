import axios from 'axios';
	
const client = axios.create({                // 

    baseURL: `http://jsonplaceholder.typicode.com/`     // base url 

});

export default client;
import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://localhost:8080/tags',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	loadData(then, errorCatch) {
		apiClient.get()
			.then(then)
			.catch(errorCatch);
	}
}
import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://localhost:8080/users',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	loadData(then, errorCatch) {
		apiClient.get('')
			.then(then)
			.catch(errorCatch);
	},
	getData(req, then, errorCatch) {
		apiClient.get('/:username/:password' + req)
			.then(then)
			.catch(errorCatch);
	}
}
import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://localhost:8080/users',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	getUser(name, then, errorCatch) {
		apiClient.get('/' + name)
			.then(then)
			.catch(errorCatch);
	},
	createUser(user, then, errorCatch) {
		apiClient.post('', user)
			.then(then)
			.catch(errorCatch);
	},
	login(user, then, errorCatch) {
		apiClient.post('/login', user)
			.then(then)
			.catch(errorCatch);
	}
}
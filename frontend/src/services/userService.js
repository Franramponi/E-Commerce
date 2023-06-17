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
	getUserByUsernameAndPassword(req, then, errorCatch) {
		apiClient.get(`/${req.username}/${req.password}`)
		  .then(then)
		  .catch(errorCatch);
	  }
}
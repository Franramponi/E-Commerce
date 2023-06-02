import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://6466a4262ea3cae8dc1ba7e1.mockapi.io/products',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	addEntry(entry, then, errorCatch) {
		apiClient.post('', entry)
			.then(then)
			.catch(errorCatch);
	},
	loadData(then, errorCatch) {
		apiClient.get('')
			.then(then)
			.catch(errorCatch);
	},
	getData(id, then, errorCatch) {
		apiClient.get('/' + id)
			.then(then)
			.catch(errorCatch);
	},
	removeEntry(id, then, errorCatch) {
		apiClient.delete('/' + id)
			.then(then)
			.catch(errorCatch);
	},
	modifyEntry(id, entry, then, errorCatch) {
		apiClient.put('/' + id, entry)
			.then(then)
			.catch(errorCatch);
	}
}
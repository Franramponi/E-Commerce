import axios from 'axios';

const apiClient = axios.create({
	//baseURL: 'https://6466a4262ea3cae8dc1ba7e1.mockapi.io/products',
	baseURL: 'http://localhost:8080/products',
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
	loadData(filters, then, errorCatch) {
		let data = "?";
		filters.forEach(e => {
			data += e.name + "=" + e.value + "&";
    });
		data = data.slice(0, -1);
		apiClient.get(data)
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
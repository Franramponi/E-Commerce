import { Type } from '../Models/models.js'

const typeSeed = async () => {
	try {
		const list = [
			{ 
				name: "Laptop"
			},
			{ 
				name: "Libro"
			}
		]

		
		for (let i = 0; i < list.length; i++) {
			await Type.create(list[i]);
		}
	}
	catch (err) {
		console.error(err.message);
	}
}

export default typeSeed;
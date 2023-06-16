import { Type } from '../Models/models.js'

const typeSeed = async () => {
	try {
		await Type.bulkCreate([
			{ 
				name: "Laptop"
			},
			{ 
				name: "Libro"
			}
		])
	}
	catch (err) {
		console.error(err.message);
	}
}

export default typeSeed;
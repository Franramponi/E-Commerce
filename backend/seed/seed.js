import userSeed from './userSeed.js'
import tagSeed from './tagSeed.js'
import productSeed from './productSeed.js'
import productTagsSeed from './productTagsSeed.js'

const seed = async () => {
	try {
		await userSeed();
		await tagSeed();
		await productSeed();
		await productTagsSeed();
	}
	catch (err) {
		console.error(err.message);
	}
}

export default seed;
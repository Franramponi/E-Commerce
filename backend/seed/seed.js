import productSeed from './productSeed.js'
import userSeed from './userSeed.js'

const seed = async () => {
	try {
		await userSeed();
		await productSeed();
	}
	catch (err) {
		console.error(err.message);
	}
}

export default seed;
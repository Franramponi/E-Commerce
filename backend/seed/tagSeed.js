import { Tag } from '../Models/models.js'

const tagSeed = async () => {
	try {
		await Tag.bulkCreate([
			{ 
				name: "tag1"
			},
			{ 
				name: "tag2"
			},
			{ 
				name: "tag3"
			},
			{ 
				name: "tag4"
			},
			{ 
				name: "tag5"
			},
		])
	}
	catch (err) {
		console.error(err.message);
	}
}

export default tagSeed;
import { Tag } from '../Models/models.js'

const tagSeed = async () => {
	try {
		const list = [
			{ 
				name: "enciclopedia"
			},
			{ 
				name: "niños"
			},
			{ 
				name: "pikachu"
			},
			{ 
				name: "pokemon"
			},
			{ 
				name: "laptop"
			},
			{ 
				name: "notebook"
			},
			{ 
				name: "asus"
			},
			{ 
				name: "gris"
			},
			{ 
				name: "gamer"
			}
		]

		
		for (let i = 0; i < list.length; i++) {
			await Tag.create(list[i]);
		}

	}
	catch (err) {
		console.error(err.message);
	}
}

export default tagSeed;
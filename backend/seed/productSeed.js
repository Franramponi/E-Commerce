import { Product } from '../Models/models.js'

const productSeed = async () => {
	try {
		await Product.bulkCreate([
			{
				name: "Name1",
				description: "Description1",
				stock: 1,
				image: "1",
				price: 111.11,
				vendor_id: 1
			},
			{
				name: "Name2",
				description: "Description2",
				stock: 2,
				image: "2",
				price: 222.22,
				vendor_id: 2
			},
			{
				name: "Name3",
				description: "Description3",
				stock: 3,
				image: "3",
				price: 333.33,
				vendor_id: 1
			},
			{
				name: "Name4",
				description: "Description4",
				stock: 4,
				image: "4",
				price: 444.44,
				vendor_id: 2
			}
		])
	}
	catch (err) {
		console.error(err.message);
	}
}

export default productSeed;
import { Product } from '../Models/models.js'

const productSeed = async () => {
	try {
		const list = [
			{
				name: "Acer Portátil Aspire 5",
				description: "Notebook Acer Aspire 5 A515-57T steel gray táctil 15.6, Intel Core i7 1255U 16GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 96EUs 1920x1080px Windows 11 Home",
				stock: 10,
				image: "https://i.imgur.com/Frzlpfb.jpeg",
				price: 1200.00,
				type_id: 1,
				vendor_id: 1
			},
			{
				name: "ASUS ROG Strix G16",
				description: "Notebook Asus Rog Strix G16 I7-13650hx 16gb 512gb Rtx4060",
				stock: 10,
				image: "https://i.imgur.com/Ta7wwhq.jpeg",
				price: 1968.00,
				type_id: 1,
				vendor_id: 1
			}
		]
		
		for (let i = 0; i < list.length; i++) {
			await Product.create(list[i]);
		}
	}
	catch (err) {
		console.error(err.message);
	}
}

export default productSeed;
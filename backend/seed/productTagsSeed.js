import { ProductTags } from '../Models/models.js'

const productTagsSeed = async () => {
	try {
		const list = [
			{
				product_id: 1,
				tag_id: 1
			},
			{
				product_id: 1,
				tag_id: 2
			},
			{
				product_id: 1,
				tag_id: 3
			},
			{
				product_id: 1,
				tag_id: 4
			},
			{
				product_id: 2,
				tag_id: 5
			},
			{
				product_id: 2,
				tag_id: 6
			},
			{
				product_id: 2,
				tag_id: 7
			},
			{
				product_id: 2,
				tag_id: 8
			},
			{
				product_id: 2,
				tag_id: 9
			}
		]

		for (let i = 0; i < list.length; i++) {
			await ProductTags.create(list[i]);
		}
	}
	catch (err) {
		console.error(err.message);
	}
}

export default productTagsSeed;
import { User } from '../Models/models.js'

const userSeed = async () => {
	try {
		await User.bulkCreate([
			{ 
				name: "admin",
				email: "admin@email.com",
				credit_card: "0000000000",
				address: "0 Admin Dr.",
				document: "00000000",
				phone_number: "0000000000",
				password: "admin",
				permission_level: 10,
				vendor_id: 1
			},
			{ 
				name: "name1",
				email: "email1@email.com",
				credit_card: "1111111111",
				address: "111 11th St.",
				document: "11111111",
				phone_number: "1111111111",
				password: "password1",
				permission_level: 1
			},
			{ 
				name: "name2",
				email: "email2@email.com",
				credit_card: "2222222222",
				address: "222 22th St.",
				document: "22222222",
				phone_number: "2222222222",
				password: "password2",
				permission_level: 1
			},
			{ 
				name: "vendor",
				email: "vendor@email.com",
				credit_card: "3333333333",
				address: "333 33th St.",
				document: "33333333",
				phone_number: "3333333333",
				password: "password3",
				permission_level: 2,
				vendor_id: 2
			}
		])
	}
	catch (err) {
		console.error(err.message);
	}
}

export default userSeed;
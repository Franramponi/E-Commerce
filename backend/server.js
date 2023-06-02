import express from 'express'
import router from './routes/router.js'
import connection from './dbConnection/connection.js'
import 'dotenv/config.js'
//import ??? from './Models/models.js'

const port = process.env.SERVER_PORT;
const app = express();
app.use(router);

connection.sync({alter: true}).then(() => {
	app.listen(port, () => {
		console.log("http://localhost:" + port);
	}).on('error', (error) => {
		console.log(error.message);
	});
})

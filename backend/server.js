import express from 'express'
import router from './routes/router.js'
import connection from './dbConnection/connection.js'
import 'dotenv/config.js'
import cors from "cors"

const port = process.env.SERVER_PORT;
const app = express();
app.use(router);

//Middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))




connection.sync({alter: true}).then(() => {
	app.listen(port, () => {
		console.log("http://localhost:" + port);
	}).on('error', (error) => {
		console.log(error.message);
	});
})

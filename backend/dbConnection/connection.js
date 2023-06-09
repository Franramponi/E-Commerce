import { Sequelize } from 'sequelize'
import "dotenv/config.js"

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DATABASE;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, username, password, {
	host: host,
	port: port,
	dialect: dialect
});

try {
	await sequelize.authenticate();
	console.log("Connection established");
} catch (err) {
	console.error(err);
}

export default sequelize
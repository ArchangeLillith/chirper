import mysql from "mysql2/promise";

//Creeate the pool using our correct database and user therein
const pool = mysql.createPool({
	host: "localhost",
	user: "chirp_user",
	password: "chirp_password",
	database: "chirper_store",
});

export default pool;

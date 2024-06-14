import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost: 3306",
    user: "root",
    password:"Megha@931",
    database: "blog",
    port: 8800,
    insecureAuth: true,
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});


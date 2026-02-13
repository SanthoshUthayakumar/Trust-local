const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Leodas18",
    database: "role_auth"
});

db.connect((err)=>{
    if(err) console.log(err);
    else console.log("MySQL Connected");
});

module.exports = db;

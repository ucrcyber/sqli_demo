const express = require("express");
const mysql = require("mysql");

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "sql_injection"
}); 

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to mySQL!");
});
app.post('/login', (req, res) => {
    const userName = req.body.username;
    const password = req.body.password;

    console.log(userName + ", " + password);
    
    // Prepared Statements
    // let sql = "SELECT * FROM users WHERE username=? AND password=?";
    // db.query(sql, [userName, password], (err, result) => {
    //     if (err) {
    //         res.send(err)
    //     }
    //     else {
    //         res.send(result);
    //     }
    // });
    // // do dis if u wanna get attacked
    db.query(
        "SELECT * FROM users WHERE username='" + userName + "' AND password='" + password + "'" ,
        (err, result) => {
            if (err) {
                res.send(err)
            } 
            else {
                res.send(result);
            }
        }
    )
})
app.listen(3001, () => {
    console.log(`Server listening on 3001`);
});
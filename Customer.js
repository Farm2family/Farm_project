const express = require("express");
const app = express();
const cors = require("cors");
const myslq = require("mysql2");
const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "123456";

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var connection = myslq.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "farm2family"
})

//jwt token middleware yaha se h 
function kavach(req, res, next) {
    const barearHeader = req.headers["authorization"];
    if (!barearHeader) {
        return res.status(403).json({ message: "invalid token" });
    }
    const token = barearHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "invalid token" });
        }
        req.user = decoded;
        next();
    })
}

connection.connect();
app.post("/register_cust", (req, res) => {
    const { name, email, password, phone, areapin, address } = req.body;
    console.log(name, areapin);
    bcrypt.hash(password, 10, function (err, hashedpassword) {
        if (err) throw err;
        console.log("password hashed", hashedpassword);
        const sql = `
                INSERT INTO customer
                ( name,email, password,phone,areapin,address )
                VALUES (?, ?, ?, ?, ?, ?)
            `;
        connection.query(sql, [name, email, hashedpassword, phone, areapin, address], function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "database error", success: false });
            }
            console.log("the user is registered");
            res.json({ message: "data inserted successfully", data: req.body });
        });
    });
});
app.get("/dashboard", kavach, (req, res) => {
    res.json({
        success: true,
        message: "welcome to farmer page",
        user: req.user
    });
});
app.post("/customer/login", (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    connection.query(
        "SELECT * FROM customer WHERE email = ?",
        [email],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err.message
                });
            }
            if (!result || result.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "user not exist"
                });
            }
            const user = result[0];
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        error: err.message
                    });
                }
                if (!match) {
                    return res.status(400).json({
                        success: false,
                        message: "wrong password"
                    });
                }
                const token = jwt.sign(
                    {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    },
                    SECRET_KEY,
                    { expiresIn: "1h" }
                );
                res.json({
                    success: true,
                    message: "user login success",
                    token: token
                });
            });
        }
    );
});
app.listen(5000, () => {
    console.log("the server ready to serve of cust");
})

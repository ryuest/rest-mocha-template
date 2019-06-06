const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const config = require('./config');

// connect to mysql
var pool = mysql.createPool(config.mysql);

// all the routes
router.get("/", function (req, res) {
    res.json({
        "Message": "Hello World !"
    });
});

module.exports = router;
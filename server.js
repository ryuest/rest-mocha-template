var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();
const rest = require("./routes");
const config = require('./config');

router.get('/', function (req, res) {
    res.json({
        "error": false,
        "message": "Hello !"
    });
});

router.post('/add', function (req, res) {
    res.json({
        "error": false,
        "message": "success",
        "data": req.body.num1 + req.body.num2
    });
});

app.use('/', router);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// include the routes
app.use('/api', rest);

app.listen(process.env.PORT || config.port, () => {
    console.log("All right ! I am alive at Port 3000.");
});
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require('path');
const router = express.Router();

const app = express();
const port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'));
// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/home.html'));
// })

// app.use('/', router);
// app.set("views", path.join(__dirname, "views"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//templating engine
const handlebars = exphbs.create({ extname: "hbs" });
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    console.log('Hello');
    res.render('home');
})

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
})
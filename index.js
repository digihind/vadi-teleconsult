const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const hbs = require("hbs");

const Doctor = require("./models/doctor");
const { json } = require("express");

const port = process.env.port || 5000;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");

main().catch(err => console.log(err));
async function main() {

    app.use(express.static(__dirname + '/public'));
    app.set('views', path.join(__dirname, 'views'));

    const handlebars = exphbs.create({ extname: "hbs" });
    app.engine('hbs', handlebars.engine);
    app.set('view engine', 'hbs');

    const routes = require('./server/routes/app');
    app.use('/', routes);




    app.listen(port, () => {
        console.log(`Listening from port ${port}`);
    })
}

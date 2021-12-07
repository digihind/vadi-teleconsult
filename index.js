const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const doctor = require('./models/doctor');
const Doctor = require("./models/doctor");

const app = express();
const port = process.env.port || 5000;
main().catch(err => console.log(err));
async function main() {

    app.use(express.static(__dirname + '/public'));
    app.set('views', path.join(__dirname, 'views'));

    const handlebars = exphbs.create({ extname: "hbs" });
    app.engine('hbs', handlebars.engine);
    app.set('view engine', 'hbs');

    app.get('/', (req, res) => {
        console.log('Hello');
        res.render('home');
    })

    app.get('/docl', async (req, res) => {
        const list = await Doctor.find({});
        console.log(list);
        res.send("Hi Sharda, Varun here!")
        // res.render("doctor",{list});
    })

    app.get('/pat', (req, res) => {
        console.log('Patient Screen Loading!');
        res.render('patient');
    })

    app.get('/doc', (req, res) => {
        console.log('Doctor Screen Loading!');
        res.render('doctor');
    })

    app.get('/book', (req, res) => {
        console.log('Doctor Screen Loading!');
        res.render('booking');
    })

    app.get('/chatscreen_doc', (req, res) => {
        console.log('Doctor Chat Screen Loading!');
        res.render('chatscreen_doc');
    })

    app.get('/chatscreen_pat', (req, res) => {
        console.log('Patient Chat Screen Loading!');
        res.render('chatscreen_pat');
    })


    app.listen(port, () => {
        console.log(`Listening from port ${port}`);
    })
}


// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/home.html'));
// })

// app.use('/', router);
// app.set("views", path.join(__dirname, "views"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//templating engine




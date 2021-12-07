const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const hbs = require("hbs");

// const router = express.Router();
// const mongoose = require('mongoose');
// const doctor = require('./models/doctor');
const Doctor = require("./models/doctor");
<<<<<<< HEAD
const Patient = require("./models/patient");
const Book = require("./models/appointment");
const{ json } = require("express");
=======
const { json } = require("express");
>>>>>>> 97c866dc086b6a1718d27210af3c0dafa1da95e9

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

    app.get('/', (req, res) => {
        // const list = Doctor.find({});
        // console.log(list);
        console.log('Hello');
        res.render('home',);
    })
    app.get('/pat', (req, res) => {
        Doctor.find({}).then(data => {
            console.log(data);
            res.render("patient", { data });
        });
    })

    app.get('/docl', async (req, res) => {
        res.send("Hi Sharda, Varun here!")
    })
    app.get("/adduser", (req, res) => {
        console.log('Hello');
        res.render('add-user');

    })
    app.post("/adduser", async (req, res) => {
        try {
            const registerDoc = new Doctor({
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                des: req.body.des,
                fees: req.body.fees,
                deg: req.body.degree,
                spec: req.body.specialization
            })

            await registerDoc.save();
            res.send("Hi");
        }
        catch (error) {
            res.status(400).send(error);
        }
    })
    app.get("/addpat", (req, res) => {
        console.log('Hello');
        res.render('add-pat');
    })
    app.post("/addpat", async (req, res) => {
        try{
            console.log(req.body.email);
            res.send(req.body);
            const registerPat = new Patient({
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                age: req.body.age,
                address: req.body.address
            })
            const registered = await registerPat.save();
            res.status(201).render(home);
        }
        catch(error){
            res.status(400).send(error);
        }
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
    app.post("/book", async (req, res) => {
        try{
            console.log(req.body.email);
            res.send(req.body);
            const book = new Book({
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                date: req.body.date,
                time: req.body.time,
                doc_name:"Shraddha suman"
            })
            const registered = await book.save();
            res.status(201).render(home);
        }
        catch(error){
            res.status(400).send(error);
        }
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




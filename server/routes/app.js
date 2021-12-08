const express = require('express');
const router = express.Router();
const userController = require('../controllers/appController')

router.get('/', appController.home);
router.get('/pat', appController.patient);
router.get('/adduser', appController.form);
router.post('/adduser', appController.add)
router.get('/doc', appController.doctor);
router.get('/chatscreen_doc', appController.chatdoc);
router.get('/chatscreen_doc', appController.chatpat);
// app.get('/', (req, res) => {
//     console.log('Hello');
//     res.render('home');
// })
// app.get('/pat', (req, res) => {
//     Doctor.find({}).then(data => {
//         console.log(data);
//         res.render("patient", { data });
//     });
// })

// app.get('/docl', async (req, res) => {
//     res.send("Hi Sharda, Varun here!")
// })
// app.get("/adduser", (req, res) => {
//     console.log('Hello');
//     res.render('add-user');

// })
// app.post("/adduser", async (req, res) => {
//     try {
//         const registerDoc = new Doctor({
//             first_name: req.body.firstname,
//             last_name: req.body.lastname,
//             email: req.body.email,
//             phone: req.body.phone,
//             des: req.body.des,
//             fees: req.body.fees,
//             deg: req.body.degree,
//             spec: req.body.specialization
//         })

//         await registerDoc.save();
//         res.send("Hi");
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// })
// app.get('/pat', (req, res) => {
//     console.log('Patient Screen Loading!');
//     res.render('patient');
// })

// app.get('/doc', (req, res) => {
//     console.log('Doctor Screen Loading!');
//     res.render('doctor');
// })

// app.get('/book', (req, res) => {
//     console.log('Doctor Screen Loading!');
//     res.render('booking');
// })

// app.get('/chatscreen_doc', (req, res) => {
//     console.log('Doctor Chat Screen Loading!');
//     res.render('chatscreen_doc');
// })

app.get('/chatscreen_pat', (req, res) => {
    console.log('Patient Chat Screen Loading!');
    res.render('chatscreen_pat');
})
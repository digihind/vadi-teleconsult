const Doctor = require("./models/doctor");

exports.home = (req, res) => {
    console.log('Hello');
    res.render('home');
}

exports.patient = (req, res) => {
    Doctor.find().then(data => {
        console.log(data);
        res.render("patient", { data });
    })
}

exports.form = (req, res) => {
    console.log('Hello');
    res.render('add-user');
}

exports.add = (req, res) => {
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

        registerDoc.save();
        res.send("Hi");
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.doctor = (req, res) => {
    console.log('Doctor Screen Loading!');
    res.render('doctor');
}

exports.chatdoc = (req, res) => {
    console.log('Doctor Chat Screen Loading!');
    res.render('chatscreen_doc');
}
exports.chatpat = (req, res) => {
    console.log('Doctor Chat Screen Loading!');
    res.render('chatscreen_pat');
}

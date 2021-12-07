const mongoose = require('mongoose');

const go = () => {
    mongoose.connect('mongodb://localhost:27017/DocsApp');
    const docSchema = new mongoose.Schema({
        email: String,
        name: String,
        password: String
    });
    const Doctor = mongoose.model("Doctor", docSchema);
    // const Abish = new Doctor({ email: "abish@gmail.com", name: "Abish", password: "abish" });
    // await Abish.save();
    module.exports = Doctor;
};
go();
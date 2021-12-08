const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/DocsApp", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(() => {
    console.log(`connection succesful`);
}).catch((e) => {
    console.log(e);
})
const patSchema = new mongoose.Schema({
        first_name : {
            type:String,
            required:true
        },
        last_name : {
            type:String,
            required:true
        },
        email : {
            type:String,
            required:true
        },
        phone : {
            type:Number,
            required:true
        },
        gender : {
            type:String,
            required:true
        },
        age : {
            type:Number,
            required:true
        },
        address : {
            type:String,
            required:true
        }
    })
    const Patient = new mongoose.model("Patient", patSchema);
    // const Abish = new Doctor({ email: "abish@gmail.com", name: "Abish", password: "abish" });
    // await Abish.save();
    module.exports = Patient;
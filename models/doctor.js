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
const docSchema = new mongoose.Schema({
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
        des : {
            type:String,
            required:true
        },
        fees : {
            type:Number,
            required:true
        },
        deg : {
            type:String,
            required:true
        },
        spec : {
            type:String,
            required:true
        }
    })
    const Doctor = new mongoose.model("Doctor", docSchema);
    // const Abish = new Doctor({ email: "abish@gmail.com", name: "Abish", password: "abish" });
    // await Abish.save();
    module.exports = Doctor;
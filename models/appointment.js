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
const bookSchema = new mongoose.Schema({
        name : {
            type:String,
            required:true
        },
        age : {
            type:Number,
            required:true
        },
        email : {
            type:String,
            required:true
        },
        date : {
            type:Date,
            required:true
        },
        time : {
            type:String,
            required:true
        },
        doc_name : {
            type:String,
            required:true
        }
    })
    const Book = new mongoose.model("Book", bookSchema);
    // const Abish = new Doctor({ email: "abish@gmail.com", name: "Abish", password: "abish" });
    // await Abish.save();
    module.exports = Book;
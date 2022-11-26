const mongoose = require('mongoose');
require('dotenv').config();
const USERNAME = 'blackworm'
const PASS = process.env.PASS
const AUTHDB = process.env.AUTHDB
const mongoAtlasUri = `mongodb+srv://${USERNAME}:${PASS}@cluster0.msiqgrz.mongodb.net/?retryWrites=true&w=majority`
console.log(USERNAME)
exports.connect = () => {
    mongoose.connect(
        mongoAtlasUri,
        {useNewUrlParser:true, useUnifiedTopology:true},
        )
.then(()=>{
    console.log("Connected to database")
})
.catch((err) =>{
    console.log("Failed to connect database")
    console.log(err)
    process.exit(1);
})
}
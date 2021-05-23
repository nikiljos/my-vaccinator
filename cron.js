const mongoose = require('mongoose')
const { Schema } = mongoose;

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.atlasURI, { useNewUrlParser: true, useUnifiedTopology: true })

var discordID
var disID
var ageGP



const userSchema = new Schema({
    discordID: String, // String is shorthand for {type: String}

    choice: [{
        disID: Number,
        ageGp: Number
    }]
});
const Model = mongoose.model('users', userSchema);
var iterator = resultsObjectArray.values();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connection successful")
        // { "choice.disID": 300 }, { "discordID": 1, "_id": 0 }

    Model.find(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            discordID = data[0].discordID
            disID = data[0].choice[0].disID
            ageGP = data[0].choice[0].ageGp
            data.forEach(() => {

            })



        }
    })





});
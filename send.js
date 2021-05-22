const mongoose = require('mongoose')
const { Schema } = mongoose;

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.atlasURI, { useNewUrlParser: true, useUnifiedTopology: true })

var discordID
var disID
var ageGP

var resultsObjectArray = [{
    districtID: 224,
    cap18: 0,
    cap45: 38,
    result18: '\nAnantnag\n\nAvailble slots for 18+ category: 0\nTotal centres listed: 8\n',
    result45: '\n' +
        'Anantnag\n' +
        '```SDH Seer - 10 - COVISHIELD - 21-05-2021 - 45+\n' +
        '1st Dose - 10 slots | 2nd Dose - 0 slots```\n' +
        '```SDH Seer - 10 - COVISHIELD - 22-05-2021 - 45+\n' +
        '1st Dose - 10 slots | 2nd Dose - 0 slots```\n' +
        '```PHC Achabal - 10 - COVISHIELD - 21-05-2021 - 45+\n' +
        '1st Dose - 10 slots | 2nd Dose - 0 slots```\n' +
        '```Anantnag DH - 1 - COVISHIELD - 21-05-2021 - 45+\n' +
        '1st Dose - 1 slots | 2nd Dose - 0 slots```\n' +
        '```Anantnag DH - 7 - COVISHIELD - 22-05-2021 - 45+\n' +
        '1st Dose - 7 slots | 2nd Dose - 0 slots```\n' +
        '\n' +
        'Availble slots for 45+ category: 38\n' +
        'Total centres listed: 8\n'
}]


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



        }
    })





});

function exec() {
    var iterator = resultsObjectArray.values();
    for (let elements of iterator) {

    }
}



// for (let elements of iterator) {
//     console.log(db.users.find({ "choice.disID": "elements.districtID" }, { "discordID": 1, }))
// }
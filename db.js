const mongoose = require('mongoose')
const { Schema } = mongoose;

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.atlasURI, { useNewUrlParser: true, useUnifiedTopology: true })

const schema = new Schema({ name: String }, { collection: 'users' });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connection successful")
    userInput.save()
        .then(console.log("success"))
        .catch('error', () => {
            console.log(error)
        })
});


const userSchema = new Schema({
    discordID: String, // String is shorthand for {type: String}

    choice: [{
        disID: Number,
        ageGp: String
    }]
});

const user = mongoose.model("user", userSchema)

const userInput = new user({
    discordID: "nikiljos#9641",
    choice: [{
        disID: 300,
        ageGp: "45+"
    }]
})

// userInput.save()
//     .then(console.log("success"))
//     .catch('error', () => {
//         console.log(error)
//     })
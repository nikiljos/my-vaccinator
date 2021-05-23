const { Client, Message } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
const PREFIX = "!";
require("dotenv").config();
var Dis;
var Age;
var Id;
var userArray;
var ua



client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});


const mongoose = require('mongoose')
const { Schema } = mongoose;

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.atlasURI, { useNewUrlParser: true, useUnifiedTopology: true })



const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connection successful")
});

//Questions Start Here - Main part

const userSchema = new Schema({
    discordID: String, // String is shorthand for {type: String}

    choice: [{
        disID: Number,
        ageGp: Number
    }]
});

const user = mongoose.model("user", userSchema)

client.on('message', uar = (message) => {
        if (message.author.bot) return; {
            if (message.content === '!help') //|| message.content === 'Help'
            {
                message.reply('Hello there! Type !vaccine to book your slots');
            }
            if (message.content.startsWith(PREFIX)) {
                const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);

                if (CMD_NAME === 'vaccine') {

                    Id = message.member.id;
                    console.log(Id);
                    //message.reply('Enter your District'); --- Asking Question PART
                    let filter = m => m.author.id === message.author.id
                    message.channel.send('<@' + Id + `> Enter your District ID`).then(() => {
                        message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                            })
                            .then(ua = message => {
                                message = message.first()
                                if (message.author.id == Id) {
                                    if (message.content == '321' || message.content == '123') {
                                        Dis = message.content;
                                        message.react('👍');
                                        console.log(Dis);
                                        message.channel.send('<@' + Id + `> Ok.Now Enter your Age Category (18+ or 45+)`);
                                        message.channel.awaitMessages(filter, {
                                                max: 1,
                                                time: 30000,
                                                errors: ['time']
                                            })
                                            .then(ua = message => {
                                                message = message.first()
                                                if (message.author.id == Id) {
                                                    if (message.content == '18' || message.content == '45') {
                                                        Age = message.content;
                                                        message.react('👍');
                                                        console.log(Age);
                                                        userArray = [{
                                                            discordID: Id,
                                                            choice: [{
                                                                disID: Dis,
                                                                ageGp: Age,
                                                            }]
                                                        }]

                                                        message.channel.send('Thankyou ' + '<@' + Id + '> We will fetch the details for you soon\n' + 'Be ready to get vaccinated!', { files: ["https://image.freepik.com/free-vector/coronavirus-vaccine-syringe-vaccine-vial-flat-icons-treatment-coronavirus-isolated_108855-2244.jpg"] })
                                                            .then(() => {

                                                                console.log(userArray[0])


                                                                userInput = new user(userArray[0])

                                                                userInput.save()
                                                                    .then(() => {
                                                                        client.users.fetch(Id).then((user) => {
                                                                            user.send('Hello ' + '<@' + Id + '>' + ' Your selected choices are:\n' + 'Age Category: ' + Age + '\nDistrict ID: ' + Dis);
                                                                        });

                                                                    })
                                                                    .catch('error', () => {
                                                                        console.log(error)
                                                                    })
                                                            })












                                                    } else {
                                                        message.channel.send('Wrong Category');
                                                        setTimeout(function() {
                                                            message.channel.send('Type !vaccine do it again');
                                                        }, 2000);
                                                    }
                                                }
                                                return userArray
                                            })
                                            .catch(collected => {
                                                message.channel.send('Timeout!');
                                            })

                                    } else {
                                        message.channel.send('Wrong District ID');
                                        setTimeout(function() {
                                            message.channel.send('Type !vaccine do again');
                                        }, 2000);
                                    }
                                }
                                return ua


                            })
                            .catch(collected => {
                                message.channel.send('Timeout!');
                            })



                    })

                }


            };

        }
    }



)
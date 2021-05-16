const axios = require('axios')
const Discord = require('discord.js');
const client = new Discord.Client();

const dotenv = require('dotenv');
dotenv.config();

const config = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');

});






client.on('message', message => {
    if (message.content === '!poda') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('potta');
    }
});


client.login(process.env.TOKEN);
const fs = require('fs');
const axios = require('axios')
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const dotenv = require('dotenv');
dotenv.config();

const config = require('./config.json');

const { prefix } = require('./config.json');



client.once('ready', () => {
    console.log('Ready!');

});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;


    try {
        var district = "300";

        client.on('message', message => {
            console.log(message.content);
            district = message.content
        });
        client.commands.get(command).execute(district, args);





    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});


client.login(process.env.TOKEN);
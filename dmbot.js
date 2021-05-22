//code by Midhun Mathew on 22-5-21
require("dotenv").config();
const { Client, Message} = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => 
{
    console.log(`${client.user.tag} has logged in.`);
    client.users.fetch('usertoken').then
    (   (user) =>
        {
            user.send('Message' + '<@usertoken>'+ ' ');
        }
    );
});







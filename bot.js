//Code by Midhun Mathew on 5-20-20
require("dotenv").config();
const { Client, Message } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
const PREFIX = "!";
var Dis;
var Age;
var Id;
//var Doz; --not for now

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

//Questions Start Here - Main part

client.on('message', (message) => 
{
    if (message.author.bot) return;
    {
        if (message.content === '!help')  //|| message.content === 'Help'
            {
            message.reply('Hello there! Type !vaccine to book your slots');
            }
            if (message.content.startsWith(PREFIX)) {
            const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
            if (CMD_NAME === 'vaccine') {
                Id=message.member.id;
                console.log(Id);
                //message.reply('Enter your District'); --- Asking Question PART
                let filter = m => m.author.id === message.author.id
                message.channel.send('<@'+ Id + `> Enter your District ID`).then(() => {
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ['time']
                    })
                        .then(message => {
                            message = message.first()
                            if(message.author.id == Id)
                            {
                            if (message.content == '321' || message.content == '123') {
                                Dis = message.content;
                                console.log(Dis);
                                message.channel.send('<@'+ Id +`> Ok.Now enter your Age Category (18 or 45)`);
                                message.channel.awaitMessages(filter,
                                    {
                                        max: 1,
                                        time: 30000,
                                        errors: ['time']
                                    })
                                    .then(message => {
                                        message = message.first()
                                        if (message.author.id == Id)
                                        {
                                        if (message.content == '18' || message.content == '45') {
                                            Age = message.content;
                                            console.log(Age);
                                            message.channel.send('Thankyou ' + '<@' + Id + '> We will fetch the details for you soon');
                                            const userArray = [{
                                                discordID: Id, // String is shorthand for {type: String}

                                                    choice: [{
                                                        disID: Dis,
                                                        ageGp: Age,
                                                    }]
                                            }]
                                            console.log(userArray[0]);



                                        }
                                        else 
                                        {
                                            message.channel.send('Wrong Category');
                                            setTimeout(function () {
                                            message.channel.send('Type !vaccine do it again');
                                            }, 2000);
                                        }
                                    }
                                    })
                                    .catch(collected => {
                                    message.channel.send('Timeout!');
                                    });
                            }
                            else 
                            {
                                message.channel.send('Wrong ID');
                                setTimeout(function() {
                                    message.channel.send('Type !vaccine do again');
                                }, 2000);
                            }}
                        })
                        .catch(collected => {
                            message.channel.send('Timeout!');
                        });
                })
            }
        }
    }
});

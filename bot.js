            require("dotenv").config();
            const { Client, Message } = require('discord.js');
            const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
            const PREFIX = "!";


            client.on('ready', () => {
                console.log(`${client.user.tag} has logged in.`);
            });
            //response from bot
            client.on('message', (message) => {
                if (message.author.bot) return;

                if (message.content === '!help') {
                    message.reply('Hello there! Type !vaccine to book your slots');
                    //message.channel.send('Hello!How can I help?');
                }
                if (message.content.startsWith(PREFIX)) {
                    const [CMD_NAME, ...args] = message.content
                        .trim()
                        .substring(PREFIX.length)
                        .split(/\s+/);
                    //console.log(CMD_NAME);      //logging
                    //console.log(args);          //logging
                    if (CMD_NAME === 'vaccine') {
                        const user = message.author.id;
                        message.reply('Please enter your District ID');

                        client.on('message', message => {
                            if (message.author.id === user) {
                                const disID = message.content;
                                console.log(disID);

                                message.reply('Please enter your Age');

                                client.on('message', m => {
                                    if (m.author.id === user) {
                                        const age = m.content;
                                        console.log(age);
                                        if (age === 18 || age === 45) {
                                            message.reply('done');
                                        }


                                    }

                                });



                            }


                        });



                    }





                }





            });

            client.login(process.env.TOKEN);
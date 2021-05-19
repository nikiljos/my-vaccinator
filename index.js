const fs = require('fs');
const axios = require('axios')
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const dotenv = require('dotenv');
dotenv.config();

client.on('message', message => {





    if (message.content === '!vaccine') {


        message.channel.send('Enter district code').then(async(start) => {
            let filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages(filter, {
                maxMatches: 1,
                time: 60000,
                errors: ['time']
            }).then(async(collected) => {


                    let input = collected.first().message.content

                    console.log(input)

                    let date_ob = new Date();

                    // current date
                    // adjust 0 before single digit date
                    let date = ("0" + date_ob.getDate()).slice(-2);

                    // current month
                    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

                    // current year
                    let year = date_ob.getFullYear();

                    var formattedDate = date + "-" + month + "-" + year;

                    let hours = date_ob.getHours();

                    // current minutes
                    let minutes = date_ob.getMinutes();

                    // console.log(formattedDate + " [" + hours + ":" + minutes + "]");

                    var centersArray = new Array();

                    centersArray.push(formattedDate + " [" + hours + ":" + minutes + "]");

                    var result = ""

                    var district = input


                    var tCap = 0





                    url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district + "&date=" + formattedDate




                    // url = "https://gist.githubusercontent.com/nikiljos/28f37128f9a21632d3c21b04da175e07/raw/4c2d65287faa1368a3cd6a012cc0503231b0a3e2/cowin-sample.json";

                    // console.log("h")


                    axios.get(url, {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0',
                            },
                        }, )
                        .then(function(response) {

                            cowinData = response.data


                            function length(cowinData) {
                                return Object.keys(cowinData).length;
                            }

                            dName = cowinData.centers[0].district_name;

                            // x = length(cowinData.centres);

                            x = length(cowinData.centers)

                            // console.log(x)

                            centersArray.push("\n" + dName)

                            var availableCap = 0;


                            for (m = 0; m < x; m++) {

                                // console.log(url);

                                y = length(cowinData.centers[m].sessions)

                                // console.log(y)
                                for (n = 0; n < y; n++) {

                                    var cap = cowinData.centers[m].sessions[n].available_capacity;
                                    availableCap = availableCap + cap

                                    if (cap > 0) {
                                        // console.log("inside")
                                        // cap.toString();
                                        var cName = cowinData.centers[m].name
                                        var vName = cowinData.centers[m].sessions[n].vaccine
                                        var vDate = cowinData.centers[m].sessions[n].date
                                        centersArray.push(cName + " - " + cap + " - " + vName + " - " + vDate)
                                    }

                                }
                            }

                            // console.log("Kot?tayam")

                            centersArray.push("\nAvailble slots: " + availableCap)

                            centersArray.push("Total centres listed: " + x)

                            tCap = tCap + availableCap;


                        })
                        .catch(function(error) {
                            // handle error
                            // console.log(error);
                            console.log("error in district1 response")
                        })
                        .then(function() {


                            // console.log("hi");

                            if (tCap >= 0) {

                                // Here array.values() function is called.
                                var iterator = centersArray.values();

                                // Here all the elements of the array is being appended.
                                for (let elements of iterator) {

                                    result = result.concat(elements + "\n");


                                }


                                // console.log(result)



                            }
                            message.channel.send(result);
                            // console.log(result)

                        })
                }

            )


        })



    }
})










client.once('ready', () => {
    console.log('Ready!');
})



client.login(process.env.TOKEN);
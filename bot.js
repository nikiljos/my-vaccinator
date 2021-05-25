const { Client, Message } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
const PREFIX = "!";
require("dotenv").config();

const axios = require('axios');
const bodyParser = require('body-parser');
const cron = require('node-cron');

let Dis;
let Age;
let Id;
let userArray;

//stores district ID of all supported districts to be used to update data in resultsObjectArray
var distArray = [{ "district_id": 301, "district_name": "Alappuzha" }, { "district_id": 307, "district_name": "Ernakulam" }, { "district_id": 306, "district_name": "Idukki" }, { "district_id": 297, "district_name": "Kannur" },
  { "district_id": 295, "district_name": "Kasaragod" }, { "district_id": 298, "district_name": "Kollam" }, { "district_id": 304, "district_name": "Kottayam" }, { "district_id": 305, "district_name": "Kozhikode" },
  { "district_id": 302, "district_name": "Malappuram" }, { "district_id": 308, "district_name": "Palakkad" }, { "district_id": 300, "district_name": "Pathanamthitta" }, { "district_id": 296, "district_name": "Thiruvananthapuram" },
  { "district_id": 303, "district_name": "Thrissur" }, { "district_id": 299, "district_name": "Wayanad" }, { "district_id": 225, "district_name": "Baramulla" }, { "district_id": 237, "district_name": "Rajouri" }
];


let resultsObjectArray = new Array();

//updates cowinData cache on app start
let date_now = new Date();
console.log(date_now, "updating data cache")
for (var i = 0; i < distArray.length; i++) {
  flow(distArray[i]);
}

//updates cowinData cache every 10 minutes 
cron.schedule('0 5,15,25,35,45,55 * * * *', () => {
  let date_now = new Date();
  console.log(date_now, "updating data cache")

  for (var i = 0; i < distArray.length; i++) {
    flow(distArray[i]);
  }



})

//sends vaccination updates every hour
cron.schedule('0 0 * * * *', () => {
  sendUser();
})


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
  //This part listens for messages and give appropriate replies
client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.guild === null) return; {
      if (message.content === '!help' || message.content === '!HELP') //|| message.content === 'Help'
      {
        message.reply('Hello! I sense that you have asked for help', { files: ["https://ik.imagekit.io/nik/newhelp-myvac_jse93D0f3.png"] });
      }
      if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);

        if (CMD_NAME === 'vaccine' || CMD_NAME === 'check' || CMD_NAME === 'VACCINE' || CMD_NAME === 'CHECK') {
          let userCMD = CMD_NAME

          message.react('💉')

          Id = message.author.id;

          //message.reply('Enter your District'); --- Asking Question PART
          let filter = m => m.author.id === message.author.id
          message.channel.send('<@' + Id + `> Enter your District ID`, { files: ["https://ik.imagekit.io/nik/districts-myvac_RrklJ79ZX.png"] }).then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              })
              .then(message => {
                message = message.first()
                if (message.author.id == Id) {
                  if (message.content == '301' || message.content == '307' || message.content == '306' || message.content == '297' || message.content == '295' || message.content == '298' || message.content == '304' || message.content == '305' || message.content == '302' || message.content == '300' || message.content == '308' || message.content == '303' || message.content == '296' || message.content == '299') {
                    Dis = message.content;
                    message.react('👍');

                    message.channel.send('<@' + Id + '> Please Enter your Age Category (18+ or 45+)');
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ['time']
                      })
                      .then(message => {
                        message = message.first()
                        if (message.author.id == Id) {
                          if (message.content == '18' || message.content == '45' || message.content == '18+' || message.content == '45+') {
                            if (message.content == '18+') {
                              Age = 18
                            } else if (message.content == '45+') {
                              Age = 45
                            } else {
                              Age = message.content
                            }
                            message.react('👍');

                            userArray = [{
                              discordID: Id,
                              choice: [{
                                disID: Dis,
                                ageGp: Age,
                              }]
                            }]


                            if (userCMD === 'vaccine' || userCMD === 'VACCINE') {

                              message.channel.send('Thankyou ' + '<@' + Id + '> We will fetch the details for you soon\n' + 'Be ready to get vaccinated!', { files: ["https://ik.imagekit.io/nik/thanks-myvac_R0-60xlpN.png"] })
                                .then(() => {

                                  userInput = new user(userArray[0])
                                    //adding user data to DB
                                  userInput.save()
                                    .then(() => {
                                      client.users.fetch(Id).then((user) => {
                                        resultDM = sendDM(userArray[0])
                                          //sends users preferred notification choices in DM
                                        user.send('Hello ' + '<@' + Id + '>' + ' Your selected choices are:\n' + 'Age Category: ' + Age + '\nDistrict ID: ' + Dis);
                                        user.send(resultDM) //sends DM to user with current slot availability in the selected region

                                      });

                                    })
                                    .catch('error', () => {
                                      console.log(error)
                                    })
                                })
                            } else if (userCMD === 'check' || userCMD === 'CHECK') {

                              //same as in previous if function but without adding to DB
                              message.channel.send('Thankyou ' + '<@' + Id + '> Check your DM for latest slot update. You can type ``!vaccine`` to register for hourly updates')
                                .then(() => {
                                  client.users.fetch(Id).then((user) => {
                                    resultDM = sendDM(userArray[0])
                                    user.send(resultDM) //sends DM to user with current slot availability in the selected region
                                  });

                                })
                            }

                          } else {
                            message.channel.send('Wrong Category');
                            setTimeout(function() {
                              message.channel.send('Type ``!vaccine`` and try again');
                            }, 2000);
                          }
                        }

                      })
                      .catch(collected => {
                        message.channel.send('Timeout!');
                      })

                  } else {
                    message.channel.send('Wrong District ID');
                    setTimeout(function() {
                      message.channel.send('Type ``!vaccine`` and try again');
                    }, 2000);
                  }
                }

              })
              .catch(collected => {
                message.channel.send('Timeout!');
              })

          })

        } else if (CMD_NAME === 'unsubscribe') {
          message.react('👋')
          Id = message.member.id;
          Model.deleteMany({ discordID: Id })
            .then(message.channel.send('<@' + Id + '> Hope you enjoyed my services. You will no longer recieve slot notifications. You can type ``!vaccine`` anytime to add a new district and start recieving alerts... 😊'))

        }

      };
    }
  }

)


function flow(districtArray) {
  district = districtArray.district_id

  let date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  // current year
  let year = date_ob.getFullYear();
  var formattedDate = date + "-" + month + "-" + year;

  var array45 = new Array(); //stores result for particualr group temporarily
  var array18 = new Array(); //stores result for particualr group temporarily

  var result18 = "" //stores result for particualr group temporarily
  var result45 = "" //stores result for particualr group temporarily

  var cap45 = 0 //stores available capacity for particualr group temporarily
  var cap18 = 0 //stores available capacity for particualr group temporarily



  url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district + "&date=" + formattedDate

  // url = "https://gist.githubusercontent.com/nikiljos/28f37128f9a21632d3c21b04da175e07/raw/4c2d65287faa1368a3cd6a012cc0503231b0a3e2/cowin-sample.json";

  axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      },
    }, )
    .then((response) => {
      dName = districtArray.district_name
      district = districtArray.district_id

      cowinData = response.data


      function length(cowinData) {
        return Object.keys(cowinData).length;
      }

      // dName = cowinData.centers[0].district_name;

      // x = length(cowinData.centres);

      x = length(cowinData.centers)

      // console.log(x)

      array45.push("\n**" + dName + "**")
      array18.push("\n**" + dName + "**")

      var availableCap = 0;


      for (m = 0; m < x; m++) {

        // console.log(url);

        y = length(cowinData.centers[m].sessions)

        // console.log(y)
        for (n = 0; n < y; n++) {

          // console.log()

          var cap = cowinData.centers[m].sessions[n].available_capacity;
          var d1Cap = cowinData.centers[m].sessions[n].available_capacity_dose1
          var d2Cap = cowinData.centers[m].sessions[n].available_capacity_dose2
          var minAge = cowinData.centers[m].sessions[n].min_age_limit
          cap45 = cap45 + cap
          var cName = cowinData.centers[m].name
          var vName = cowinData.centers[m].sessions[n].vaccine
          var vDate = cowinData.centers[m].sessions[n].date

          if (cap > 0) {
            array45.push("```" + cName + " - " + cap + " - " + vName + " - " + vDate + " - " + minAge + "+\n1st Dose - " + d1Cap + " slots | 2nd Dose - " + d2Cap + " slots```")
          }

          if (minAge == 18) {
            cap18 = cap18 + cap
            if (cap > 0) {
              array18.push("```" + cName + " - " + cap + " - " + vName + " - " + vDate + " - " + minAge + "+\n1st Dose - " + d1Cap + " slots | 2nd Dose - " + d2Cap + " slots```")
            }
          }

        }
      }

      array45.push("\nAvailble slots for 45+ category: " + cap45)
      array45.push("Total centres listed: " + x)
      array45.push("Book your slots on https://selfregistration.cowin.gov.in/")

      array18.push("\nAvailble slots for 18+ category: " + cap18)
      array18.push("Total centres listed: " + x)
      array18.push("Book your slots on https://selfregistration.cowin.gov.in/")

      // Here array.values() function is called.
      var iterator = array45.values();
      // Here all the elements of the array is being appended.
      for (let elements of iterator) {
        result45 = result45.concat(elements + "\n");
      }





      var iterator2 = array18.values();
      for (let elements of iterator2) {
        result18 = result18.concat(elements + "\n");

        ar = ({
            districtID: district,
            districtName: dName,
            cap18: cap18,
            cap45: cap45,
            result18: result18,
            result45: result45

          }) //this object stores the whole data of a district and then logs it to an resultsObjectArray with all districts
        log(ar)

      }
    })
    .catch(function(error) {
      console.log(error);
      // console.log("error in cowin response")
    })

}

//used to return appropriate response from resultsObjectArray according to user preferences
function sendDM(userArray) {

  for (var x = 0; x < 16; x++) {

    if (userArray.choice[0].disID == resultsObjectArray[x].districtID) {

      if (userArray.choice[0].ageGp == 18) {

        mess = resultsObjectArray[x].result18.slice(0, 2000)
        return mess

      } else if (userArray.choice[0].ageGp == 45) {

        mess = resultsObjectArray[x].result45.slice(0, 2000)
        return mess
      }
    }
  }

}

//used to log district data to specific indexes in order for fast retrieval
function log(ar) {

  switch (ar.districtID) {
    case 301:
      resultsObjectArray[0] = ar;
      break;
    case 307:
      resultsObjectArray[1] = ar;
      break;
    case 306:
      resultsObjectArray[2] = ar;
      break;
    case 297:
      resultsObjectArray[3] = ar;
      break;
    case 295:
      resultsObjectArray[4] = ar;
      break;
    case 298:
      resultsObjectArray[5] = ar;
      break;
    case 304:
      resultsObjectArray[6] = ar;
      break;
    case 305:
      resultsObjectArray[7] = ar;
      break;
    case 302:
      resultsObjectArray[8] = ar;
      break;
    case 308:
      resultsObjectArray[9] = ar;
      break;
    case 300:
      resultsObjectArray[10] = ar;
      break;
    case 296:
      resultsObjectArray[11] = ar;
      break;
    case 303:
      resultsObjectArray[12] = ar;
      break;
    case 299:
      resultsObjectArray[13] = ar;
      break;
    case 225:
      resultsObjectArray[14] = ar;
      break;
    case 237:
      resultsObjectArray[15] = ar;
      break;

  }

}

const Model = mongoose.model('users', userSchema);

//finds users from DB and send them appropriate results
function sendUser() {

  Model.find(async(err, data) => {
    if (err) {
      console.log(err)
    } else {
      let sendArray = []
      for (var nx = 0; nx < data.length; nx++) {
        let dataToSend = sendDM(data[nx])
        let userToSend = data[nx].discordID
        sendArray.push({
          userToSend,
          dataToSend
        })

      }
      await Promise.all(sendArray.map(({
        userToSend,
        dataToSend
      }) => (client.users.fetch(userToSend, false).then((user) => {

        user.send(dataToSend)

      }))))

    }
  })

}
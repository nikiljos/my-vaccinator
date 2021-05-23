const { Client, Message } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
const PREFIX = "!";
require("dotenv").config();
var Dis;
var Age;
var Id;
var userArray;
var ua;
const axios = require('axios');
const bodyParser = require('body-parser');
const cron = require('node-cron');

var distArray = [{ "district_id": 301, "district_name": "Alappuzha" }, { "district_id": 307, "district_name": "Ernakulam" }, { "district_id": 306, "district_name": "Idukki" }, { "district_id": 297, "district_name": "Kannur" },
  { "district_id": 295, "district_name": "Kasaragod" }, { "district_id": 298, "district_name": "Kollam" }, { "district_id": 304, "district_name": "Kottayam" }, { "district_id": 305, "district_name": "Kozhikode" },
  { "district_id": 302, "district_name": "Malappuram" }, { "district_id": 308, "district_name": "Palakkad" }, { "district_id": 300, "district_name": "Pathanamthitta" }, { "district_id": 296, "district_name": "Thiruvananthapuram" },
  { "district_id": 303, "district_name": "Thrissur" }, { "district_id": 299, "district_name": "Wayanad" }, { "district_id": 225, "district_name": "Baramulla" }, { "district_id": 237, "district_name": "Rajouri" }
];

let resultsObjectArray = [];

// cron.schedule('0 */2 * * * *', () => {

for (var i = 0; i < distArray.length; i++) {
  resultsObjectArray[i] = flow(distArray[i]);
}


// })



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

client.on('message', (message) => {
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
              .then(message => {
                message = message.first()
                if (message.author.id == Id) {
                  if (message.content == '225' || message.content == '123') {
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
                                      resultDM = sendDM(userArray[0])
                                      user.send('Hello ' + '<@' + Id + '>' + ' Your selected choices are:\n' + 'Age Category: ' + Age + '\nDistrict ID: ' + Dis);
                                      user.send(resultDM)
                                    });

                                  })
                                  .catch('error', () => {
                                    console.log(error)
                                  })
                              })


                          } else {
                            message.channel.send('Wrong Category');
                            setTimeout(function() {
                              message.channel.send('Type !vaccine and try again');
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
                      message.channel.send('Type !vaccine and try again');
                    }, 2000);
                  }
                }


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

  // let hours = date_ob.getHours();
  // // current minutes
  // let minutes = date_ob.getMinutes();
  // // console.log(formattedDate + " [" + hours + ":" + minutes + "]");

  var array45 = new Array();
  var array18 = new Array();

  // centersArray.push(formattedDate + " [" + hours + ":" + minutes + "]");

  var result18 = ""
  var result45 = ""

  var cap45 = 0
  var cap18 = 0



  url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district + "&date=" + formattedDate

  // url = "https://gist.githubusercontent.com/nikiljos/28f37128f9a21632d3c21b04da175e07/raw/4c2d65287faa1368a3cd6a012cc0503231b0a3e2/cowin-sample.json";

  axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0',
      },
    }, )
    .then(function(response) {
      dName = districtArray.district_name

      cowinData = response.data


      function length(cowinData) {
        return Object.keys(cowinData).length;
      }

      // dName = cowinData.centers[0].district_name;

      // x = length(cowinData.centres);

      x = length(cowinData.centers)

      // console.log(x)

      array45.push("\n" + dName)
      array18.push("\n" + dName)

      var availableCap = 0;


      for (m = 0; m < x; m++) {

        // console.log(url);

        y = length(cowinData.centers[m].sessions)

        // console.log(y)
        for (n = 0; n < y; n++) {

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

      array18.push("\nAvailble slots for 18+ category: " + cap18)
      array18.push("Total centres listed: " + x)



    })
    .catch(function(error) {
      // handle error
      console.log(error);
      // console.log("error in cowin response")
    })
    .then(function() {


      // Here array.values() function is called.
      var iterator = array45.values();
      // Here all the elements of the array is being appended.
      for (let elements of iterator) {
        result45 = result45.concat(elements + "\n");
      }





      var iterator2 = array18.values();
      for (let elements of iterator2) {
        result18 = result18.concat(elements + "\n");

      }

      resultsObjectArray = ({
        districtID: district,
        districtName: dName,
        cap18: cap18,
        cap45: cap45,
        result18: result18,
        result45: result45

      })

      // console.log(resultsObjectArray)

      return resultsObjectArray;


    })
};



() => {
  for (var i = 0; i < 16; i++) {
    if (userArray.choice[0].disID == resultsObjectArray[i].districtID) {
      if (userArray.choice[0].ageGp == 18) {

        return resultsObjectArray[i].result18

      } else if (userArray.choice[0].ageGp == 45) {
        return resultsObjectArray[i].result45
      }
    }
  }

}

const Model = mongoose.model('users', userSchema);





Model.find(() => {
  if (err) {
    console.log(err)
  } else {
    discordID = data[0].discordID
    disID = data[0].choice[0].disID
    ageGP = data[0].choice[0].ageGp

  }
})
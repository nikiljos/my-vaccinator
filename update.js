const axios = require('axios')

const dotenv = require('dotenv');
dotenv.config();


const resultsObjectArray = [];

district = 224

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

        cowinData = response.data


        function length(cowinData) {
            return Object.keys(cowinData).length;
        }

        dName = cowinData.centers[0].district_name;

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

        resultsObjectArray.push({
            districtID: district,
            cap18: cap18,
            cap45: cap45,
            result18: result18,
            result45: result45

        })

        console.log(resultsObjectArray)

        console.log(resultsObjectArray[0].districtID)
        console.log(resultsObjectArray[0].result18)
        console.log(resultsObjectArray[0].result45)

    })
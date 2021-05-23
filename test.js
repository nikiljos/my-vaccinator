//code by Midhun Mathew on 22-5-21
require("dotenv").config();
const { Client, Message } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
client.login(process.env.DISCORDJS_BOT_TOKEN);


res = '\n' +
    'Rajouri\n' +
    '```Manjakote - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Manjakote - 149 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 49 slots```\n' +
    '```Manjakote - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Manjakote - 49 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 24 slots```\n' +
    '```Manjakote - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Manjakote - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Manjakote - 49 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 24 slots```\n' +
    '```Gambir Brahmana - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Brahmana - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Brahmana - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Brahmana - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Brahmana - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Brahmana - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Brahmana - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Thanamandi - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Thanamandi - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Thanamandi - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Thanamandi - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Thanamandi - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Thanamandi - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Thanamandi - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Dalhori - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Dalhori - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Dalhori - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Dalhori - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Dalhori - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Dalhori - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Dalhori - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```DH Rajouri - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```DH Rajouri - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```DH Rajouri - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```DH Rajouri - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```DH Rajouri - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```DH Rajouri - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```DH Rajouri - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Harthal PHC - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Harthal PHC - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Harthal PHC - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Harthal PHC - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Harthal PHC - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Harthal PHC - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Harthal PHC - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Androoth - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Androoth - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Androoth - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Androoth - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Androoth - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Androoth - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Androoth - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Moughla PHC - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Moughla PHC - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Moughla PHC - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Moughla PHC - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Moughla PHC - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Moughla PHC - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Moughla PHC - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```KALAKOTE - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```KALAKOTE - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```KALAKOTE - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```KALAKOTE - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```KALAKOTE - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```KALAKOTE - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```KALAKOTE - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```TERYATH - 250 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 200 slots | 2nd Dose - 50 slots```\n' +
    '```TERYATH - 250 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 200 slots | 2nd Dose - 50 slots```\n' +
    '```TERYATH - 250 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 200 slots | 2nd Dose - 50 slots```\n' +
    '```TERYATH - 250 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 200 slots | 2nd Dose - 50 slots```\n' +
    '```TERYATH - 250 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 200 slots | 2nd Dose - 50 slots```\n' +
    '```TERYATH - 250 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 200 slots | 2nd Dose - 50 slots```\n' +
    '```TERYATH - 250 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 200 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Swari - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Swari - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Swari - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Swari - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Swari - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Swari - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Swari - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Kallar Chtyar - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Kallar Chtyar - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Kallar Chtyar - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Kallar Chtyar - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Kallar Chtyar - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Kallar Chtyar - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Kallar Chtyar - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Palma - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Palma - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Palma - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Palma - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Palma - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Palma - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Palma - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Kheri - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Kheri - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Kheri - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Kheri - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Kheri - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Kheri - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Kheri - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```UHU Rajouri - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```UHU Rajouri - 149 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 99 slots | 2nd Dose - 50 slots```\n' +
    '```UHU Rajouri - 149 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 99 slots | 2nd Dose - 50 slots```\n' +
    '```UHU Rajouri - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```UHU Rajouri - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```UHU Rajouri - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```UHU Rajouri - 48 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 23 slots | 2nd Dose - 25 slots```\n' +
    '```KHAWAS - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```KHAWAS - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```KHAWAS - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```KHAWAS - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```KHAWAS - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```KHAWAS - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```KHAWAS - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC GARAN - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC GARAN - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC GARAN - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC GARAN - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC GARAN - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC GARAN - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC GARAN - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Samote - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Samote - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Samote - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Samote - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Samote - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Samote - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Samote - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Leerawali - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Leerawali - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Leerawali - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Leerawali - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Leerawali - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Leerawali - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Leerawali - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Field Hospital Ratala - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Field Hospital Ratala - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Field Hospital Ratala - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Field Hospital Ratala - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Field Hospital Ratala - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Field Hospital Ratala - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Field Hospital Ratala - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Plullian - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Plullian - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Plullian - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Plullian - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Plullian - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Plullian - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Plullian - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Bhawani - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Bhawani - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Bhawani - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Bhawani - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Bhawani - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Bhawani - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Bhawani - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Laroka - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Laroka - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Laroka - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Laroka - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Laroka - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Laroka - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Laroka - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Jamola - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Jamola - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Jamola - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Jamola - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Jamola - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Jamola - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Jamola - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Shadra Shrief - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Shadra Shrief - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Shadra Shrief - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Shadra Shrief - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Shadra Shrief - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Shadra Shrief - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Shadra Shrief - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Sialsui - 150 - COVISHIELD - 23-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Sialsui - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Sialsui - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Sialsui - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Sialsui - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Sialsui - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Sialsui - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```SARANOO - 148 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 98 slots | 2nd Dose - 50 slots```\n' +
    '```SARANOO - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```SARANOO - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```SARANOO - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```SARANOO - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```SARANOO - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Uppar Hatthal - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Uppar Hatthal - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Uppar Hatthal - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Uppar Hatthal - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Uppar Hatthal - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Uppar Hatthal - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Rajouri - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Rajouri - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Rajouri - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Rajouri - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Rajouri - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Rajouri - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PANJAH - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PANJAH - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PANJAH - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PANJAH - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PANJAH - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PANJAH - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Tatapani PHC - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Tatapani PHC - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Tatapani PHC - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Tatapani PHC - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Tatapani PHC - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Tatapani PHC - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Lamberi - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Lamberi - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Lamberi - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Lamberi - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Lamberi - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Lamberi - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Taralla PHC - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Taralla PHC - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Taralla PHC - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Taralla PHC - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Taralla PHC - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Taralla PHC - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Bagla Nadyala - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Bagla Nadyala - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Bagla Nadyala - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Bagla Nadyala - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Bagla Nadyala - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Bagla Nadyala - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Kandi CHC - 149 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 49 slots```\n' +
    '```Kandi CHC - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Kandi CHC - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Kandi CHC - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Kandi CHC - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Kandi CHC - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Langer - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Langer - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Langer - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Langer - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Langer - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Langer - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Chingus - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Chingus - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```NTPHC Chingus - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Chingus - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Chingus - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```NTPHC Chingus - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Siot - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Siot - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Siot - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Siot - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Siot - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Siot - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Darhal - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Darhal - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Darhal - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Darhal - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Darhal - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Darhal - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Budhal - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Budhal - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Budhal - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Budhal - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Budhal - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Budhal - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```CHC Sunder Bani - 148 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 98 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Sunder Bani - 149 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 99 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Sunder Bani - 149 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 99 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Sunder Bani - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Sunder Bani - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Sunder Bani - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```GH Rajouri - 149 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 99 slots | 2nd Dose - 50 slots```\n' +
    '```GH Rajouri - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```GH Rajouri - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```GH Rajouri - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```GH Rajouri - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```GH Rajouri - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Peeri - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Peeri - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Peeri - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Peeri - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Peeri - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Peeri - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Balshama - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Balshama - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Balshama - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Balshama - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Balshama - 49 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 24 slots```\n' +
    '```PHC Balshama - 49 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 24 slots```\n' +
    '```PHC Lah - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Lah - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```PHC Lah - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Lah - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Lah - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```PHC Lah - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Gambir Mughlana - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Mughlana - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Mughlana - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Mughlana - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Mughlana - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Gambir Mughlana - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Nowshera - 149 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 99 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Nowshera - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```CHC Nowshera - 50 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```CHC Nowshera - 50 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```CHC Nowshera - 50 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```CHC Nowshera - 50 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 25 slots | 2nd Dose - 25 slots```\n' +
    '```Phc Seri - 150 - COVISHIELD - 24-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Phc Seri - 150 - COVISHIELD - 25-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Phc Seri - 150 - COVISHIELD - 26-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Phc Seri - 150 - COVISHIELD - 27-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Phc Seri - 150 - COVISHIELD - 28-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '```Phc Seri - 150 - COVISHIELD - 29-05-2021 - 45+\n' +
    '1st Dose - 100 slots | 2nd Dose - 50 slots```\n' +
    '\n' +
    'Availble slots for 45+ category: 34582\n' +
    'Total centres listed: 48\n'


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    client.users.fetch('760119692878282762', false).then((user) => {
        f = res.slice(0, 2000)
        console.log(f)
        user.send(f);
    });
});
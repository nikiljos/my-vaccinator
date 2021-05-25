![BFH Banner](https://ik.imagekit.io/nik/bfh-header_yKkg6ycdS.png)
# myVaccinator
myVaccinator is a discord bot that alerts you about the available vaccination slots in your area every hour.  Simply type `!vaccine` in a common server and get your vaccination slot the smart way.

## Team members
1. [Nikhil Jose](https://github.com/nikiljos)
2. [Midhun Mathew](https://github.com/memidhun)

## Team Id
BFH/receEVi8kY4wfVJJy/2021

## Link to product walkthrough
[https://vimeo.com/554606989](https://vimeo.com/554606989)

## How it Works ?
When you type `!vaccine`, required details are collected conversationaly by the bot. It then stores this data to a mongoDB database and and sends you alerts on regular intervals as DM in discord. Vaccination slot details are fetched using the CoWin API. In order to overcome the rate limtations of the API the server caches the slot availability data every 10 minutes so that the API limit will never be exhausted.

[Project Demo](https://user-images.githubusercontent.com/57913645/119452734-4eb02000-bd54-11eb-90e0-c60191e19f7a.mp4)

## Sample Conversations
![Sample Conversation](https://user-images.githubusercontent.com/57913645/119460412-49ef6a00-bd5c-11eb-9aab-5317d6e4f98d.png)


## Packages used
axios - v0.21.1  
discord.js - v12.5.3  
dotenv -v9.0.2  
mongoose - v5.12.10  
node-cron - v3.0.0  

## How to configure
In order to run the bot on your own Server and Database,
* Clone the repo
* Install required packages
* Run the app using `node bot.js`

## How to Use
In a common server type `!vaccine` to invoke the bot and start recieving alerts.  
The bot is not open for public use as of now so it may not work properly in your discord server unless it is deployed in your own Server and Databases

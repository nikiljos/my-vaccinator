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
![help-mv](https://user-images.githubusercontent.com/57913645/119457406-49a19f80-bd59-11eb-9fef-f2fb7d4a3d1c.png)
![vaccine-myvac](https://user-images.githubusercontent.com/57913645/119457445-51614400-bd59-11eb-8130-e5ce02a8f25b.png)
![dm1](https://user-images.githubusercontent.com/57913645/119457465-57572500-bd59-11eb-8a10-ba8154723acb.jpg)
![-mv](https://user-images.githubusercontent.com/57913645/119457488-5de59c80-bd59-11eb-91e4-3f3b86e03b01.png)
![dm2](https://user-images.githubusercontent.com/57913645/119457513-65a54100-bd59-11eb-84da-3268b0fe298e.jpg)
![unsub](https://user-images.githubusercontent.com/57913645/119457525-68079b00-bd59-11eb-8a90-8387cf89fe1a.png)


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

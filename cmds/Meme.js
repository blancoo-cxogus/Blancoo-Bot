  
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let meme = randomIntInc(1, 7)
let embed = new Discord.RichEmbed()
.setTitle('Мем | Чтобы получить еще, напишите команду `,meme`')
.setColor("#00ffff")
if(meme === 1){
  embed.setImage('https://cdn.discordapp.com/attachments/644178585472729104/675328674656026656/unknown.png')
}
if(meme === 2){
  embed.setImage('https://cdn.discordapp.com/attachments/644178585472729104/673200372881424404/a57e7c414c1676b411cfcb518b8d8d24.jpg')
}
if(meme === 3){
  embed.setImage('https://cdn.discordapp.com/attachments/598780050804047872/673005232711794698/Screenshot_20200201-121906_YouTube_Vanced.jpg')
}
if(meme === 4){
  embed.setImage('https://cdn.discordapp.com/attachments/598780050804047872/672758872888442880/Screenshot_2020-01-31-12-46-05.png')
}
if(meme === 5){
  embed.setImage('https://cdn.discordapp.com/attachments/598780050804047872/672173056252182606/unknown-29.png')
}
if(meme === 6){
  embed.setImage('https://cdn.discordapp.com/attachments/529016532232044556/531193781727264768/unknown.png')
}
if(meme === 7){
  embed.setImage('https://cdn.discordapp.com/attachments/488901948037398539/570330146674966542/vjjuhh-1058990.jpg')
}
message.channel.send(embed);}

exports.help = {
    name:"meme"

}

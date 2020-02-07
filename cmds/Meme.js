  
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let meme = randomIntInc(0, 2)
let embed = new Discord.RichEmbed()
.setTitle('Мем | Чтобы получить еще, напишите команду `,meme`')
.setColor("#00ffff")
if(meme === 1){
  embed.setImage('https://cdn.discordapp.com/attachments/644178585472729104/675328674656026656/unknown.png')
}
if(meme === 2){
  embed.setImage('https://cdn.discordapp.com/attachments/644178585472729104/673200372881424404/a57e7c414c1676b411cfcb518b8d8d24.jpg')
}
message.channel.send(embed);}

exports.help = {
    name:"meme"

}

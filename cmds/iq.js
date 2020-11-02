const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let user = message.mentions.users.first() || message.author;
let a = randomIntInc(1, 164)
let embed = new Discord.RichEmbed()
.setDescription(`:jigsaw: IQ ТЕСТ :jigsaw:\nУ ${user.username} ${a} IQ`)
.setColor("#ffffff")
.setThumbnail(user.displayAvatarURL)
 if(a === 161){
   embed.setDescription(`:jigsaw: IQ ТЕСТ :jigsaw:\nОшибка! "-999" это не число!`)
 }
 if(a === 162){
   embed.setDescription(`:jigsaw: IQ ТЕСТ :jigsaw:\nУ ${user.username} IQ больше, чем ожидалось.`)
 }
 if(a === 163){
   embed.setDescription(`:jigsaw: IQ ТЕСТ :jigsaw:\nУ ${user.username} IQ меньше, чем ожидалось.`)
 }
 if(a === 164){
   embed.setDescription(`:jigsaw: IQ ТЕСТ :jigsaw:\nНе удалось определить IQ пользователя ${user.username}`)
 }
message.channel.send(embed);}

exports.help = {
    name:"iq"

}

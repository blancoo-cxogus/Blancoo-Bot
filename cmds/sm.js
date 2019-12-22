const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let a = randomIntInc(2, 20)
let user =  message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setTitle('Сколько у меня см?')
.addField("Вычисляем...", `У ${user.username} **${a}** см`)
.setColor("#00ffff")
message.channel.send(embed);}

exports.help = {
    name:"sm"

}

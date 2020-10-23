const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let user = message.mentions.users.first() || message.author;
let a = randomIntInc(0, 160)
let embed = new Discord.RichEmbed()
.addField(":jigsaw: IQ ТЕСТ :jigsaw:", `У ${user.username} ${a} IQ`)
.setColor("#00ff14")
.setThumbnail(user.displayAvatarURL)

message.channel.send(embed);}

exports.help = {
    name:"iq"

}

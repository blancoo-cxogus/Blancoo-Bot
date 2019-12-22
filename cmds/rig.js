const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let user = message.mentions.users.first() || message.author;
let a = randomIntInc(0, 101)
let embed = new Discord.RichEmbed()
.addField(":blue_heart: На сколько гей? :blue_heart:", `${user.username} гей на ${a}%`)
.setColor("#00ffff")
.setThumbnail(user.displayAvatarURL)

message.channel.send(embed);}

exports.help = {
    name:"gay"

}

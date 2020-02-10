const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let a = message.mentions.users.first()
let b = message.mentions.users.second()
let c = randomIntInc(0, 100)
let d = randomIntInc(0, 100)
let embed = new Discord.RichEmbed()
.setTitle('Спиннер')
.setDescription(`Ваш спиннер прокрутился  ${b} минут ${a} секунд.`)
.setColor("#00ffff")
.setThumbnail(user.displayAvatarURL)

message.channel.send(embed);}

exports.help = {
    name:"spinner"

}

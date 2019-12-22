const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let user =  message.author;
let a = randomIntInc(1, 6)
let embed = new Discord.RichEmbed()
.setDescription(`${user.username} бросил кубик и он показал **${a}**`)
.setColor("#00ffff")
.setThumbnail('http://pngimg.com/uploads/dice/dice_PNG110.png')
message.channel.send(embed);}

exports.help = {
    name:"cube"

}

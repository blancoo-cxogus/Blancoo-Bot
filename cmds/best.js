onst Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let user = message.mentions.users.first();
let a = randomIntInc(1, 194)
let embed = new Discord.RichEmbed()
.setDescription(`:jigsaw: IQ ТЕСТ :jigsaw:\nУ ${user.username} ${a} IQ`)
.setColor("#ffffff")
.setThumbnail(user.displayAvatarURL)
message.channel.send(embed);}

exports.help = {
    name:"iq"

}

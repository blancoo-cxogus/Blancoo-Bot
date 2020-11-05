onst Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let user = message.mentions.users.first();
let content = args.slice(1).join(' ')
let embed = new Discord.RichEmbed()
.setAuthor(`${user.user}`,`${user.displayAvatarURL}`)
.setDescription(`:jigsaw:`)
.setColor("#ffffff")
.setThumbnail(user.displayAvatarURL)
message.channel.send(embed);}

exports.help = {
    name:"iq"

}

const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
let nick = args.join(" ")
message.member.setNickname(`${nick}`)
module.exports.help = {
    name: 'nick'
}

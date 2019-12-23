const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
let user = message.author
let nick = args.join(" ")
user.setNickname(nick);
module.exports.help = {
    name: 'nick'
}

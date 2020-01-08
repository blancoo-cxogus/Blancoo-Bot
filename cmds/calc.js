const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    let ddos = args.join(" ")
    let onef = Math.round(ddos)
    if (err) return message.reply("Ошибка")
    message.channel.send(onef) 
}
module.exports.help = {
    name: "calc"
};

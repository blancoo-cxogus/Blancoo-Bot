const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let buss = message.author
    message.delete().catch();
    let lallas = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${buss} подмигнул`)
    message.channel.send(lallas)
}
exports.help = {
    name: "wink"
}

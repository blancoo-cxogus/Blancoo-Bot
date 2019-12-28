const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let bus = message.author
    message.delete().catch();
    let lalla = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${bus} улыбнулся`)
    message.channel.send(lalla)
}
exports.help = {
    name: "smile"
}

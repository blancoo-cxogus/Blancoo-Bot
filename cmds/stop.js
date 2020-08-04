const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
        Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    }
    let buss = message.author
    message.delete().catch();
    let lallas = new Discord.RichEmbed()
     .setColor('#00ff14')
     .setDescription(`${buss} хочет что-то сказать!`)
    message.channel.send(lallas)
}
exports.help = {
    name: "stop"
}

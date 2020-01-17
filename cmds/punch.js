const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
        Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    }
    let ress = [`но он увернулся`,`и он не успел увернутся`].random()
    let uss = message.mentions.users.first()
    let buss = message.author
    message.delete().catch();
    let lallas = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${buss} дал пощечину ${uss}, ${ress}`)
     .setThumbnail('https://cdn.discordapp.com/attachments/632907824669655070/660483514784940033/Hand.png')
    if(!uss) return bot.send('<:xmark:651075973378211847> Пожайлуста, укажите пользователя')
    if(uss === buss) {
        lallas.setDescription(`${buss} дал пощечину самому себе`)
    }
    message.channel.send(lallas)
}
exports.help = {
    name: "slap"
}

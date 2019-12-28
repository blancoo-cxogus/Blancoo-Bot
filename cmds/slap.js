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
     .setDescription(`${buss} ударил ${uss}, ${ress}`)
     .setThumbnail('https://cdn.pixabay.com/photo/2017/01/31/23/09/gun-2028034_960_720.png')
    if(!uss) return message.reply(' пожайлуста, укажите пользователя')
    if(uss === buss) {
        lallas.setDescription(`${buss} ударил самого себя`)
    }
    message.channel.send(lallas)
}
exports.help = {
    name: "punch"
}

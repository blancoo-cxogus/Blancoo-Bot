const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let bus = message.author
    message.delete().catch();
    let lalla = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${bus} улыбнулся`)
     .setThumbnail('https://img2.freepng.ru/20171218/16c/smiley-png-5a374fbe61a442.7794950415135743343999.jpg')
    message.channel.send(lalla)
}
exports.help = {
    name: "smile"
}

const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let bus = message.author
    message.delete().catch();
    let lalla = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${bus} улыбнулся`)
     .setThumbnail('https://img2.freepng.ru/20171218/5b6/smiley-png-5a37645e699974.1949963015135796144325.jpg')
    message.channel.send(lalla)
}
exports.help = {
    name: "smile"
}

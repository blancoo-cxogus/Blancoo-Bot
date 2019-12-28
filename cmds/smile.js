const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let bus = message.author
    message.delete().catch();
    let lalla = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${bus} улыбнулся`)
     .setThumbnail('https://img.favpng.com/5/19/22/smiley-emoji-emoticon-face-png-favpng-1TKfgzzxzK8bKbfJHwWg1MT3C.jpg')
    message.channel.send(lalla)
}
exports.help = {
    name: "smile"
}

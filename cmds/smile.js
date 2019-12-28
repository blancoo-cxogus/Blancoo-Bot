const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let bus = message.author
    message.delete().catch();
    let lalla = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${bus} улыбнулся`)
     .setThumbnail('https://icon2.cleanpng.com/20180328/aae/kisspng-emoji-smiley-happiness-iphone-emoticon-emoji-5abb33c36af8e1.3259570715222179234382.jpg')
    message.channel.send(lalla)
}
exports.help = {
    name: "smile"
}

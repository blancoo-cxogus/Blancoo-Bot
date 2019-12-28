const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let bus = message.author
    message.delete().catch();
    let lalla = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${bus} улыбнулся`)
     .setThumbnail('https://mpng.pngfly.com/20190517/bhh/kisspng-smiley-emoji-emoticon-portable-network-graphics-cl-emoji-shy-smile-best-hd-wallpaper-5cdf70877f5b18.5174286915581472075217.jpg')
    message.channel.send(lalla)
}
exports.help = {
    name: "smile"
}

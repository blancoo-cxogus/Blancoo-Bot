const Discord = require("discord.js");
module.exports.run = (bot, message, args) => { 
    const embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor('Вот ваш пинг:')
    .setDescription(`${Date.now() - message.createdTimestamp}`+ ' ms')
    .setTimestamp()
    message.channel.send(embed);
};
module.exports.help = {
    name: "ping"
}; 

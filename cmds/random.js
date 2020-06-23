const Discord = require('discord.js')
exports.run = (bot, message, args) => 
{
    var result = Math.floor(Math.random() * 1000)
    var random = new Discord.RichEmbed()
    .setColor('#FFFF14')
    .setDescription(`${result}`)
    message.channel.send(random)
}
exports.help = {
    name: 'random-number'
}

const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let result = new Discord.RichEmbed()
    .setColor('#00ff14')
    .setTitle('Топ по репутации')
    .setDescription('Ars - 0\nCxogus - 0\nRonnie - 0\nthe мозг - 0\nNeuTroN - 0\nAranchickXD - 0\nWenTy - 0\nHuCuTa_09 - 0\nEndereee McPe☭ - 0\nИстиричный Киря - 0')
    message.channel.send(result)
}

module.exports.help = {
    name: 'rep'
}

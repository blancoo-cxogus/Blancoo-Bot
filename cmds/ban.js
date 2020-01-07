exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    let pla = message.author
    var banRole = message.member.roles.get('663622747238301718')
    var embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Выдан бан!')
        .addField('Подробнее...',`**Модератор:** ${moder}\n**Нарушитель:** ${warnmember}\n**Причина:** ${warnreason}`)
    message.channel.send(embed).then(warnmember.addRole(banRole))
}
exports.help = {
    name: 'ban'
}

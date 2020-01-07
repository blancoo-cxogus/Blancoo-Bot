exports.run = (bot, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("у вас недостаточно прав!")
    let warnmember = message.mentions.users.first()
    let moder = message.author
    let warnreason = args.slice(1).join(' ')
    if (!warnmember) return message.reply("пожайлуста, укажите пользователя")
    if (!warnreason) return message.reply("пожайлуста, укажите причину бана")
    var banRole = message.member.roles.get('663622747238301718')
     let warnresult = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Вам был выдан бан!')
        .addField('От сервера Blancoo',`**Модератор:** ${moder}\n**Причина:** ${warnreason}`)
        .setThumbnail('http://pngimg.com/uploads/exclamation_mark/exclamation_mark_PNG29.png')
    var embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Выдан бан!')
        .addField('Подробнее...',`**Модератор:** ${moder}\n**Нарушитель:** ${warnmember}\n**Причина:** ${warnreason}`)
    warnmember.send(warnresult)
    message.channel.send(embed).then(warnmember.addRole(banRole))
}
exports.help = {
    name: 'ban'
}

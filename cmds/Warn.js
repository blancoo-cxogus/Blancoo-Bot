const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return bot.send("<:xmark:651075973378211847> Недостаточно прав!")
    let warnmember = message.mentions.users.first()
    let moder = message.author
    let warnreason = args.slice(1).join(' ')
    let warnresult = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Вам было выдано предупреждение!')
        .addField('От сервера Blancoo',`**Модератор:** ${moder}\n**Причина:** ${warnreason}`)
        .setThumbnail('http://pngimg.com/uploads/exclamation_mark/exclamation_mark_PNG29.png')
    let warnokaymsg = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Выдано предупреждение!')
        .addField('Подробнее...',`**Модератор:** ${moder}\n**Нарушитель:** ${warnmember}\n**Причина:** ${warnreason}`)
    if (!warnmember) return bot.send("<:xmark:651075973378211847> Пожайлуста, укажите пользователя")
    if (!warnreason) return bot.send("<:xmark:651075973378211847> Пожайлуста, укажите причину")
    let rpchannel = message.guild.channels.find('name', 'админ')
if(!rpchannel) return bot.send("<:xmark:651075973378211847> Не удалось найти логи");
rpchannel.send(warnokaymsg)
    warnmember.send(warnresult)
    message.channel.send(warnokaymsg)
};
module.exports.help = {
    name: "warn"
}

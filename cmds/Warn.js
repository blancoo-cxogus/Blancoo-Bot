const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(twarn)
    let twarn = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Недостаточно прав!')
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
    warnmember.send(warnresult)
    message.channel.send(warnokaymsg)
};
module.exports.help = {
    name: "warn"
}

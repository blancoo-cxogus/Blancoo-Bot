const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(twarn)
    let twarn = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Недостаточно прав!')
    let warnmember = message.mentions.users.first()
    let moder = message.author
    let warnreason = args.slice(1).join(' ')
    if (!warnmember) return message.reply("пожайлуста, укажите пользователя")
    if (!warnreason) return message.reply("пожайлуста, укажите причину")
    let warnokaymsg = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Убрано предупреждение!')
        .addField('Подробнее...',`**Модератор:** ${moder}\n**Нарушитель:** ${warnmember}\n**Причина:** ${warnreason}`)
    let rpchannel = message.guild.channels.find('name', 'админ')
if(!rpchannel) return message.channel.send("Не удалось найти канал для отчетов");
rpchannel.send(warnokaymsg)
    message.channel.send(warnokaymsg)
};
module.exports.help = {
    name: "unwarn"
}

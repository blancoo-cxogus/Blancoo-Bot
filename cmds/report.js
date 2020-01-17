const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
   if(!args[0]) return bot.send("<:xmark:651075973378211847> Вы не указали пользователя");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return bot.send("<:xmark:651075973378211847> Не удалось найти пользователя");
    let rreason = args.join(" ").slice(0);
    if(!rreason) return bot.send("<:xmark:651075973378211847> Введите причину");

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("📕Жалоба на", `${rUser} АЙДИ: ${rUser.id}`)
    .addField("📝Жалоба от", `${message.author} АЙДИ: ${message.author.id}`)
    .addField("📢Канал", message.channel)
    .addField("📄Причина", rreason)
        message.channel.send(`<a:YesGif:651075988490551307> Совсем скоро администрация нашего сервера, рассмотрит жалобу на ${rUser.user.tag}`)
let rpchannel = message.guild.channels.find('name', '⌈📰⌋┊логи')
if(!rpchannel) return message.channel.send("Не удалось найти канал для отчетов");
rpchannel.send(embed)

}

module.exports.help = {
  name: "report"
}

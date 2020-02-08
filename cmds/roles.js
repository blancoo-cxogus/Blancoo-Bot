const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let twarn = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Ты конечно молодец, что нашел секретную команду, но недостаточно прав!')
    if (!message.member.hasPermission("ADMINISTATOR")) return message.reply(twarn)
    let tfwarn = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Укажи текст сообщения!')
    let content = args.slice(0).join(' ')
    let result = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Полезные ссылки')
    .setDescription(content)
    .setThumbnail('https://support.rebrandly.com/hc/article_attachments/360020801793/rebrandly_url_shortener_010.png')
    if (!content) return message.reply(tfwarn)
    await message.delete()
    await message.channel.send(result)
}

module.exports.help = {
    name: 'inf2roles3247'
}

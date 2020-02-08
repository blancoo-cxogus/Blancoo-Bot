const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTATOR")) return message.reply(twarn)
    let twarn = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Недостаточно прав!')
    let tfwarn = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Укажи текст сообщения!')
    let content = args.slice(0).join(' ')
    let result = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Навигация по серверу')
    .setDescription(content)
    .setThumbnail('https://author.today/content/2019/04/14/7dd1f51f92494c28bded9d164839b578.png?width=265&height=400&mode=max')
    if (!content) return message.reply(tfwarn)
    await message.delete()
    await message.channel.send(result)
}

module.exports.help = {
    name: 'inf2roles3247'
}

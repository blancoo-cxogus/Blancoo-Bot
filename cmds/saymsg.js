const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let twarn = new Discord.RichEmbed()
    .setAuthor(`Ошибка`,'https://images-ext-2.discordapp.net/external/9Q_b70cs1yvSzxGzU0wXo2QWUDMr12uRi5FUIybQcNQ/%3Fv%3D1/https/cdn.discordapp.com/emojis/695541716760920086.gif')   
    .setTimestamp()
    .setColor('#00ff14')
    .setTitle('Недостаточно прав!')
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(twarn)
    let tfwarn = new Discord.RichEmbed()
    .setAuthor(`Ошибка`,'https://images-ext-2.discordapp.net/external/9Q_b70cs1yvSzxGzU0wXo2QWUDMr12uRi5FUIybQcNQ/%3Fv%3D1/https/cdn.discordapp.com/emojis/695541716760920086.gif')   
    .setTimestamp()
    .setColor('#00ff14')
    .setTitle('Укажи текст сообщения!')
    let content = args.slice(0).join(' ')
    if (!content) return message.channel.send(tfwarn)
    await message.delete()
    await message.channel.send(content)
}

module.exports.help = {
    name: 'saymsg'
}

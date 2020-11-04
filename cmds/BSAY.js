const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(twarn)
    let twarn = new Discord.RichEmbed()
    .setAuthor(`Ошибка`,'https://images-ext-2.discordapp.net/external/9Q_b70cs1yvSzxGzU0wXo2QWUDMr12uRi5FUIybQcNQ/%3Fv%3D1/https/cdn.discordapp.com/emojis/695541716760920086.gif')   
    .setTimestamp()
    .setColor('#00ff14')
    .setTitle('Недостаточно прав!')
    let tfwarn = new Discord.RichEmbed()
    .setAuthor(`Ошибка`,'https://images-ext-2.discordapp.net/external/9Q_b70cs1yvSzxGzU0wXo2QWUDMr12uRi5FUIybQcNQ/%3Fv%3D1/https/cdn.discordapp.com/emojis/695541716760920086.gif')   
    .setTimestamp()
    .setColor('#00ff14')
    .setTitle('Укажи текст сообщения!')
    let content = args.slice(0).join(' ')
    let result = new Discord.RichEmbed()
    .setColor('#ffffff')
    .setDescription(`${content}`)
    if (!content) return message.reply(tfwarn)
    await message.delete()
    await message.channel.send(result)
}

module.exports.help = {
    name: 'bsay'
}

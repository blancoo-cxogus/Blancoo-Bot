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
    .setTitle(':newspaper2: Новости Blancoo')
    .setDescription(content)
    .setThumbnail('https://cdn.discordapp.com/icons/617301670166003723/a_c7cd2ab2429402a8733c285d8e7b7180.gif?size=128')
    if (!content) return message.reply(tfwarn)
    await message.delete()
    await message.channel.send(result)
}

module.exports.help = {
    name: 'news'
}

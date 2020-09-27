
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTATOR")) return message.reply(twarn)
    let twarn = new Discord.RichEmbed()
    .setColor('#00ff14')
    .setTitle('Недостаточно прав!')
    let tfwarn = new Discord.RichEmbed()
    .setColor('#00ff14')
    .setTitle('Укажи текст сообщения!')
    let content = args.slice(0).join(' ')
    let result = new Discord.RichEmbed()
    .setColor('#000000')
    .setTitle(':newspaper2: Новости Blancoo')
    .setDescription(content)
    .setThumbnail('https://cdn.discordapp.com/attachments/759674163001557013/759674202436796446/iYSC2BYZ7.jpg')
    if (!content) return message.reply(tfwarn)
    await message.delete()
    await message.channel.send(result)
}

module.exports.help = {
    name: 'bnews'
}

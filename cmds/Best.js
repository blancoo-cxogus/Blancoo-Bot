const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return bot.send('У вас нету прав!')
    let user = message.mentions.users.first()
    let usern = args.slice(1).join(' ')
    let dmresult = new Discord.RichEmbed()
      .setColor('#00ffff')
      .setTitle(user.username)
      .setDescription(usern)
      .setThumbnail(`${user.displayAvatarURL}`)
    if (!user) return bot.send('Укажите пользователя!')
    if (!usern) return bot.send('Укажите сообщение!')
    message.channel.send(dmresult)
    message.delete()
};
module.exports.help = {
    name: "best"
}

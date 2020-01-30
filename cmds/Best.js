const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return bot.send('<:xmark:651075973378211847> У вас нету прав!')
    let user = message.mentions.users.first()
    let usern = args.slice(1).join(' ')
    let dmresult = new Discord.RichEmbed()
      .setColor('#00ffff')
      .setTitle(user.username)
      .setDescription(usern)
      .setThumbnail(`${user.displayAvatarURL}`)
    message.channel.send(dmresult)
    message.delete()
};
module.exports.help = {
    name: "best"
}
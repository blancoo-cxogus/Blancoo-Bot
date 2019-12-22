const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(twarn)
    let place = args.slice(0).join(' ')
    let twarn = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Недостаточно прав!')
    let random = new Discord.RichEmbed()
    .setColor("#33353C")
    var user = message.guild.members.random();
random.setDescription(`**${place} место: ${user.user}**`)
         bot.send(random)
};

exports.help = {
    name:"winner"

}

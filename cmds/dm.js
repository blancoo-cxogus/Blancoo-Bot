const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    let twarn = new Discord.RichEmbed()
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        var warning = new Discord.RichEmbed()
        .setColor('FF0000')
        .setDescription('Недостаточно прав!')
        message.channel.send(warning)
    }
    let dmmember = message.mentions.users.first()
    let dmmessage = args.slice(1).join(' ')
    let dmresult = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle(':bell: Новое уведомление!')
        .setDescription(`${dmmessage}`)
    dmmember.send(dmresult)
    message.delete()
};
module.exports.help = {
    name: "dm"
}

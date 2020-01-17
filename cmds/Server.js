const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    0: "Нету",
    1: "Низкая",
    2: "Высокая",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#333399")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Название", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Создатель", message.guild.owner, inline)
    .addField(":Регион", message.guild.region, inline)
    .addField("Уровень модерации", verlvl[message.guild.verificationLevel],inline)
    .addField("Участники", ${message.guild.memberCount}, inline)
    .addField("Ролей", message.guild.roles.size, inline)
    .addField("Каналов", message.guild.channels.size, inline)
    .addField("Вы присоединислись", message.member.joinedAt)
    .setFooter(Создан ${message.guild.createdAt});
    message.channel.send(serverembed);
    message.delete();
}
module.exports.help = {
  name:"serverinfo"
}

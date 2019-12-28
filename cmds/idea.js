const Discord = require('discord.js')

exports.run = async (bot, message, args) => { 
  let noq = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setTitle('Использование: ,idea [Идея]')
  let botmessage = args.join(" ");
  message.delete().catch();
  let botreplyi = new Discord.RichEmbed()
  .setColor('#00ffff')
  .setTitle('💡 Идея')
  .setDescription(`${botmessage}`)
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
  let ideachannel = message.guild.channels.find('name', '🎁-⌈💡⌋┊идеи')
if(!ideachannel) return message.channel.send("Не удалось найти канал для отчетов");
    if (!args[0]) return message.reply(noq);
  if (!args) return message.reply("Тебе должны голосовать")
    const pollTopic = await ideachannel.send(botreplyi);
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
};

exports.help = {
    name:"idea"

}

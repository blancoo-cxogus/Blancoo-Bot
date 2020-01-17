  
const Discord = require('discord.js')

exports.run = async (bot, message, args) => { 
  let player = message.author
  let game = args.join(" ");
  message.delete().catch();
  let botreplyi = new Discord.RichEmbed()
  .setColor('#00ffff')
  .setTitle(`🎮 ${player.username} ищет тиммейта в игру ${game}!`)
  .setDescription('Если ты согласен, напиши ему в личные сообщения.')
  .setThumbnail(`${message.author.displayAvatarURL}`)
  let ideachannel = message.guild.channels.find('name', '⌈🎮⌋┊тиммейты')
if(!ideachannel) return message.channel.send("Не удалось найти канал для отчетов");
    if (!args[0]) return bot.send("<:xmark:651075973378211847> Введите игру в которой хотите найти тиммейта");
    ideachannel.send(botreplyi)
};

exports.help = {
    name:"teammate"

}

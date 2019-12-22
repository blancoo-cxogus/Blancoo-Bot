

exports.run = async (bot, message, args) => { 
const Discord = require('discord.js')
  let noq = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setTitle('Вопрос не найден.')
  let botmessage = args.join(" ");
  message.delete().catch();
  let botreplyi = new Discord.RichEmbed()
  .setColor('#00ffff')
  .setTitle(`${botmessage}`)
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    if (!args[0]) return message.reply(noq);
  if (!args) return message.reply("Тебе должны голосовать")
    const pollTopic = await message.channel.send(botreplyi);
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
};

exports.help = {
    name:"poll"

}

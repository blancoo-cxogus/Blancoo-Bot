const { RichEmbed } = require('discord.js');

module.exports.run = (bot, msg, args) => {
  let user = msg.mentions.users.first() || msg.author;

  msg.channel.send(
    new RichEmbed()
      .setColor('00ff14')
      .setDescription(user.tag)
      .setImage(`${user.displayAvatarURL}?size=2048`)
  );
};

module.exports.help = { 
  name: 'avatar'
};

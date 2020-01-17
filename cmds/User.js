const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:Online:651075782352830465>┊Онлайн",
        idle: "<:Idle:651075781715558400>┊Не активен",
        dnd: "<:Dnd:651075751566770215>┊Не беспокоить",
        offline: "<:Offline:651075783640612874>┊Не в сети / Невидимый",
        streaming: "<:Streaming:651075938422882304>┊Стримит"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<a:YesGif:651075988490551307>┊Да";
  } else {
    bot = "<:xmark:651075973378211847>┊Нет";
  }

            let embed = new Discord.RichEmbed()
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ffcc")
                .addField("Полный никнейм", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Никнейм", `${member.nickname !== null ? `<a:YesGif:651075988490551307>┊Никнейм: ${member.nickname}` : "<:xmark:651075973378211847>┊Нету"}`, true)
                .addField("Бот?", `${bot}`,inline, true)
                .addField("Статус", `${status[member.user.presence.status]}`, inline, true)
                .addField("Игры", `${member.user.presence.game ? `<:XP:651075973428805632>┊${member.user.presence.game.name}` : "<:xmark:651075973378211847>┊Не играет"}`,inline, true)
                .addField("Создание аккаунта", member.user.createdAt)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }

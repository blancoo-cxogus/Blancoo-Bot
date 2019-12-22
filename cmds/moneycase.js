exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    let pla = message.author
    var caseRole = message.member.roles.get('657889004494258188')
    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
    let nocase = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('У вас нету кейсов для открытия!')
    if(!caseRole) return message.reply(nocase)
    let money = randomIntInc(5,20)
    var replies = [`Вы открыли кейс, и получили ${money}`,`Вы открыли кейс, и получили ${money}`]
    var result = Math.floor((Math.random() * replies.length));
    let embed2 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('#00ffff')
    .setTitle(`${pla.username} открыл кейс и получил ${money} В-монет`)
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('#00ffff')
    .setTitle(`${replies[result]} B-монет`)
    .setDescription(`Ваши деньги в пути, осталось ждать около 30-450 минут`)
    .setThumbnail('https://cdn.discordapp.com/attachments/627452935676100618/653619763783925810/image0.png')
    let rpchannel = message.guild.channels.get('635407432474034206')
if(!rpchannel) return message.reply("Не удалось найти канал для отчетов");
rpchannel.send(embed2)
    message.channel.send(embed).then(message.member.removeRole(caseRole))
}
exports.help = {
    name: 'open-case'
}

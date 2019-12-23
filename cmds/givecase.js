const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(twarn)
    let twarn = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Недостаточно прав!')
let balapan = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setDescription('Укажите участника')
var role = message.member.roles.get('657889004494258188')
var member = message.mentions.members.first() || message.author;
var arg = new Array()
arg[0] = member
if(!arg[0]) return message.reply(balapan)
member.addRole(role)
let rpchannel = message.guild.channels.get('635407432474034206')
if(!rpchannel) return console.log("Не удалось найти канал для отчетов");
let embid = new Discord.RichEmbed()
   .setColor('#00ffff')
   .setDescription(`Участнику ${member.user.username} выдан кейс`)
rpchannel.send(embid)
}
module.exports.help = {
    name: 'addrole'
}

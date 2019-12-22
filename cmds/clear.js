const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let erro = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setTitle('У вас нет прав!')
    let errs = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setTitle('Укажите значение меньше 100')
    let errt = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setTitle('Укажите значение больше 1')
    let result = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setTitle(`Удалено ${args[0]} сообщений`)
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send(erro);
    if(args[0]>100) return bot.send(errs);
    if(args[0]<1) return bot.send(errt);
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(result).then(msg => msg.delete(15*1000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};

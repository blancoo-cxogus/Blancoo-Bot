const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send("<:xmark:651075973378211847> У вас нет прав!");
    if(args[0]>100) return bot.send("<:xmark:651075973378211847> Укажите значение меньше 100");
    if(args[0]<1) return bot.send("<:xmark:651075973378211847> Укажите значение больше 1");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`<a:YesGif:651075988490551307> Удалено ${args[0]} сообщений.`).then(msg => msg.delete(15*1000));
    });
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};

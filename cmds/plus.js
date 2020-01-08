const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {  
  let a = args[1].split(/ +/g);
  let b = args[2].split(/ +/g);
  var answer = a + b
  let result = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription("Получается: " + answer)
  message.channel.send(result)
module.exports.help = {
    name: "plus"
}

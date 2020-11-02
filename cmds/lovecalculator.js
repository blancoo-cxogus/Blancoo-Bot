const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let a = message.mentions.users.first()
let b = message.author
let c = randomIntInc(0, 100)
let embed = new Discord.RichEmbed()
.setTitle('Калькулятор любви')
.setDescription(`${a} любит ${b} на ${c}%`)
.setColor("#ffffff")
.setThumbnail('https://pngimg.com/uploads/heart/heart_PNG51337.png')
if(c === 0) {
  embed.setDescription(`${a} не любит ${b}`)
}
if(c === 100){
  embed.setDescription(`${a} любит ${b} всей душой`)
}
if(a === b){
  embed.setDescription(`${a} любит себя на ${c}%`)    
}
message.channel.send(embed);}

exports.help = {
    name:"lovecalc"
}

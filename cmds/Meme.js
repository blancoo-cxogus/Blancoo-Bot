  
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);}
let meme = randomIntInc(1, 18)
let embed = new Discord.RichEmbed()
.setTitle('Мем | Чтобы получить еще, напишите команду `,meme`')
.setColor("#00ffff")
if(meme === 1){
  embed.setImage('https://cdn.discordapp.com/attachments/644178585472729104/675328674656026656/unknown.png')
}
if(meme === 2){
  embed.setImage('https://cdn.discordapp.com/attachments/644178585472729104/673200372881424404/a57e7c414c1676b411cfcb518b8d8d24.jpg')
}
if(meme === 3){
  embed.setImage('https://cdn.discordapp.com/attachments/598780050804047872/673005232711794698/Screenshot_20200201-121906_YouTube_Vanced.jpg')
}
if(meme === 4){
  embed.setImage('https://cdn.discordapp.com/attachments/598780050804047872/672758872888442880/Screenshot_2020-01-31-12-46-05.png')
}
if(meme === 5){
  embed.setImage('https://cdn.discordapp.com/attachments/598780050804047872/672173056252182606/unknown-29.png')
}
if(meme === 6){
  embed.setImage('https://cdn.discordapp.com/attachments/529016532232044556/531193781727264768/unknown.png')
}
if(meme === 7){
  embed.setImage('https://cdn.discordapp.com/attachments/488901948037398539/570330146674966542/vjjuhh-1058990.jpg')
}
if(meme === 8){
  embed.setImage('https://memepedia.ru/wp-content/uploads/2019/12/vrach-i-durka-mem-5.jpg')
}
if(meme === 9){
  embed.setImage('https://memepedia.ru/wp-content/uploads/2019/12/vrach-i-durka-mem-11-360x270.jpg')
}
if(meme === 10){
  embed.setImage('https://antislang.ru/wp-content/uploads/%D0%B4%D1%83%D1%80%D0%BA%D0%B0-4.jpg')
}
if(meme === 11){
  embed.setImage('https://cdn.discordapp.com/attachments/633671705612648508/673531785879224380/Screenshot_13.png')
}
if(meme === 12){
  embed.setImage('https://cdn.discordapp.com/attachments/633671705612648508/673531317379530775/IMG-20200202-WA0000.jpg')
}
if(meme === 13){
  embed.setImage('https://cdn.discordapp.com/attachments/633671705612648508/673531316779614248/IMG_20200201_211201_314.jpg')
}
if(meme === 14){
  embed.setImage('https://cdn.discordapp.com/attachments/633671705612648508/673531316515635200/unknown-29.png')
}
if(meme === 15){
  embed.setImage('https://cdn.discordapp.com/attachments/649611799213375498/675421979926593557/IMG_20200207_184204.jpg')
if(meme === 16){
  embed.setImage('https://cdn.discordapp.com/attachments/488901948037398539/567582682570162186/gPsggusqgAQ.png')
}
if(meme === 17){
  embed.setImage('https://cdn.discordapp.com/attachments/549218016215433216/568809408373456897/CueHNTi2Q-o.jpg')
}
if(meme === 18){
  embed.setImage('https://sun9-21.userapi.com/c850324/v850324811/9bf07/7wVLXKLtepY.jpg')
}
message.channel.send(embed)
}

module.exports.help = {
    name: 'meme'
}

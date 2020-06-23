const Discord = module.require("discord.js");
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
}
module.exports.run = async (bot, message, args) => {
    let think = args.join(" ")
    let choose =
    ['Ребро', 'Орел', 'Решка'].random()
    let result = new Discord.RichEmbed()
    .setColor('#fff014')
    .setTitle('Монетка')
    .setDescription(`Вам выпал(а) ${choose}\n **Лузер!**`)
    .setThumbnail('http://pngimg.com/uploads/coin/coin_PNG36943.png')
    if(think === choose) 
    result.setDescription(`Вам выпал(а) ${choose} \n **Удача!**`)
    if(!think)
    result.setDescription(`Вам выпал(а) ${choose}`)
    message.channel.send(result)
}
module.exports.help = {
    name: 'coin'
}

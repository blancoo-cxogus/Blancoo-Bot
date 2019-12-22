const Discord = module.require("discord.js");
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
}
module.exports.run = async (bot, message, args) => {
    let noq = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Использование: ,coin <Решка/Орел/Ребро>.')
    let think = args.join(" ")
    let choose =
    ['Ребро', 'Орел', 'Решка'].random()
    if (!args[0]) return message.reply(noq);

    let result = new Discord.RichEmbed()
    .setColor('#fff000')
    .setTitle('Монетка')
    .setDescription(`Вам выпал(а) ${choose}\n **Лузер!**`)
    .setThumbnail('http://pngimg.com/uploads/coin/coin_PNG36943.png')
    if(think === choose) 
    result.setDescription(`Вам выпал(а) ${choose} \n **Удача!**`)


    message.channel.send(result)
}

module.exports.help = {
    name: 'coin'
}

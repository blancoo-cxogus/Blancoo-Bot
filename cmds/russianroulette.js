const Discord = module.require("discord.js");
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
}
module.exports.run = async (bot, message, args) => {
    let yourmamkaschoose =
    ['Вы умерли!', 'Вы умерли!', 'Вы выжили!'].random()

    let result = new Discord.RichEmbed()
    .setColor('#fff000')
    .setTitle('Русская рулетка')
    .addField('Вы выстрелили в себя и...',`${yourmamkaschoose}`)
    .setThumbnail('https://cdn.pixabay.com/photo/2017/01/31/23/09/gun-2028034_960_720.png')

    message.channel.send(result)
}

module.exports.help = {
    name: 'russian-roulette'
}

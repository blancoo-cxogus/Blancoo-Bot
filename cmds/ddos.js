const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    let onef = Math.round((Math.random() * (100 - 1) + 1))
    let twof = Math.round((Math.random() * (800 - 300) + 300))
    let threef = Math.round((Math.random() * (1200 - 500) + 500))
    let ddos = args.join(" ")
    bot.send(`Начинаем ddos на ${ddos}`);
    setTimeout(bot.send, 2000, `ping ${onef}`)
    setTimeout(bot.send, 4000, `ping ${twof}`)
    setTimeout(bot.send, 10000, `ping ${threef}`)
    setTimeout(bot.send, 12000, `Юзер задудосен.`)
}
module.exports.help = {
    name: "ddos"
};

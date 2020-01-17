const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    let onef = Math.round((Math.random() * (100 - 1) + 1))
    let twof = Math.round((Math.random() * (800 - 300) + 300))
    let threef = Math.round((Math.random() * (1200 - 500) + 500))
    let ddos = args.join(" ")
    bot.send(`<a:TechicalGif:651075974330581032> Начинаем ddos на ${ddos}`);
    setTimeout(bot.send, 2000, `<a:Leoding:651075781648187398> ping ${onef}`)
    setTimeout(bot.send, 4000, `<a:Leoding:651075781648187398> ping ${twof}`)
    setTimeout(bot.send, 10000, `<a:Leoding:651075781648187398> ping ${threef}`)
    setTimeout(bot.send, 12000, `<a:YesGif:651075988490551307> Юзер задудосен.`)
}
module.exports.help = {
    name: "ddos"
};

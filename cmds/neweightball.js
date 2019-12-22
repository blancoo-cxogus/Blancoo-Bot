const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (!args[0]) return message.reply(fwarn);
    let fwarn = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Пожайлуста, напишите вопрос')
    let replies = ["Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?","Возможно","Скорее нет","Не совсем"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if(!question.includes('?')) return message.reply(swarn)
    let swarn = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Это не вопрос, поставь вопросительный знак.')
  
    if(question === "У меня есть смысл жить?") replies[result] = 'Нет, умри нахуй\n **ПАСХАЛКА**'
    if(question === "Где смотреть аниме?") replies[result] = 'Только на youmiteru.ru!\n **ПАСХАЛКА**' 
    if(question === "8ball?") replies[result] = '???????\n **ПАСХАЛКА**'
    if(question === "Ты пидор?") replies[result] = '...\n **ПАСХАЛКА**'
    if(question === "Ты захватил мир?") replies[result] = 'Пока что, я думаю, нет\n **ПАСХАЛКА**'
    if(question === "К 2020 ты захватишь мир?") replies[result] = 'Не хочу, чтобы ты знал.\n **ПАСХАЛКА**'
    if(question === "Когда будет война?") replies[result] = 'В 2020 году\n **ПАСХАЛКА**'
    if(question === "Из-за чего пиздец?") replies[result] = 'Из-за Зефирки\n **ПАСХАЛКА**'

    let e = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Вопрос:", question)
        .addField("Ответ:", replies[result]);

    message.channel.send(e);
}
module.exports.help = {
    name: "8ball"
}; 
const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (!args[0]) return bot.send("<:xmark:651075973378211847> Пожайлуста, напишите вопрос.");
    let replies = ["Уверен в этом.","Конечно!","Верно!","Это точно","А ты что, сомневался? Конечно же, да!","Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?","Возможно","Скорее нет","Не совсем"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if(!question.includes('?')) return bot.send("<:xmark:651075973378211847> Это не вопрос, поставь вопросительный знак")
  
    if(question === "У меня есть смысл жить?") replies[result] = 'Нет, умри нахуй\n **ПАСХАЛКА**'
    if(question === "Где смотреть аниме?") replies[result] = 'Только на youmiteru.ru!\n **ПАСХАЛКА**' 
    if(question === "8ball?") replies[result] = '???????\n **ПАСХАЛКА**'
    if(question === "Ты пидор?") replies[result] = '...\n **ПАСХАЛКА**'
    if(question === "Ты живешь в Москве?") replies[result] = 'Нет, но за то у меня есть чупа-чупс с вкусом квартиры в Москве\n **ПАСХАЛКА**'
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

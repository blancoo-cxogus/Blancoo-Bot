const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    if (!args[0]) return bot.send("<:xmark:651075973378211847> Вопрос не найден");
    let replies = ["Прямо сейчас", "Завтра", "Вчера", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?","Никогда","Скоро","Тебе еще очень долго ждать", "Через месяц", "Через год", "Жди неделю..."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if(!question.includes('?')) return bot.send("<:xmark:651075973378211847> Это не вопрос, поставь вопросительный знак")
    if(question === "Когда будет третья мировая?") replies[result] = 'Я планирую ее сделать скоро.\n **ПАСХАЛКА**'
    if(question === "Когда Blancoo удалят?") replies[result] = 'Надеюсь, что никогда\n **ПАСХАЛКА**'
    if(question === "Когда тебя удалят?") replies[result] = 'Пожайлуста, не надо меня удалять. Я очень хороший бот и слушаюсь хозяина. :(\n **ПАСХАЛКА**'
    if(question === "Когда я найду свою любовь?") replies[result] = 'С такими глупыми занятиями как втыкать в экран - никогда.\n **ПАСХАЛКА**'
    let e = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Вопрос:", question)
        .addField("Ответ:", replies[result]);

    message.channel.send(e);
}
module.exports.help = {
    name: "when"
}; 

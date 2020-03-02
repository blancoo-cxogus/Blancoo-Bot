const discord = require("discord.js");
const webhook = require("webhook-discord");
module.exports.run = async (bot, message, args) => {
const Hook = new webhook.Webhook("url"); // Прямая ссылка на вЕбхук
 
const msg = new webhook.MessageBuilder()
                .setName("Name") // Название вебхука, если нету то по дефолту стоит
                .setColor("#00ff00") // Цвет embed, логично, лол
                .setText("1") // Текст вне embed текста, или внутри, я не помню.
                .addField("2", "3") // embed текст(Пинг не робит в нём)
                .addField("4", "5")
                .setTime();
 
Hook.send(msg);} // Отправить вебхук
module.exports.help = {
   name: "webhook"
}

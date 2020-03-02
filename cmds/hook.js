const discord = require("discord.js");
const webhook = require("webhook-discord");
module.exports.run = async (bot, message, args) => {
let messagehook = args.slice(0).join(' ')
const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/684008202635051052/kjFunNILxRPZ42b0-U-LPtww681g5wBirgq0PnpTYIWemmR9EMRTRslCFPH5fdpDpzXv"); // Прямая ссылка на вЕбхук
let user = message.author
const msg = new webhook.MessageBuilder()
                .setName(user.username) // Название вебхука, если нету то по дефолту стоит
                .setText(messagehook) // Текст вне embed текста, или внутри, я не помню.
                Hook.avatarURL(`${user.displayAvatarURL}?size=2048`)
 
Hook.send(msg);} // Отправить вебхук
module.exports.help = {
   name: "webhook"
}

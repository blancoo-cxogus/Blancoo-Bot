const discord = require("discord.js");
const webhook = require("webhook-discord");
module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("KICK_MEMBERS")) return bot.send('<:xmark:651075973378211847> У вас нету прав!')
let messagehook = args.slice(0).join(' ')
const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/684008202635051052/kjFunNILxRPZ42b0-U-LPtww681g5wBirgq0PnpTYIWemmR9EMRTRslCFPH5fdpDpzXv"); // Прямая ссылка на вЕбхук
let user = message.author
const msg = new webhook.MessageBuilder()
                .setName("Blancoo")
                .setColor("#00ffff")
                .addField(`Сообщение от ${user.username}`, `${messagehook}`)
 
Hook.send(msg);} 
module.exports.help = {
   name: "webhook"
}

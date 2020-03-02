const discord = require("discord.js");
const webhook = require("webhook-discord");
module.exports.run = async (bot, message, args) => {
let messagehook = args.slice(0).join(' ')
const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/684008202635051052/kjFunNILxRPZ42b0-U-LPtww681g5wBirgq0PnpTYIWemmR9EMRTRslCFPH5fdpDpzXv"); // Прямая ссылка на вЕбхук
let user = message.author
const msg = new webhook.MessageBuilder()
                .setName("Blancoo")
                .setColor("#00ffff")
                .addField("Сообщение", `${messagehook}`)
 
Hook.send(msg);} 
module.exports.help = {
   name: "webhook"
}

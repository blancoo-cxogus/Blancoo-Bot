function penis(size) {
return "8" + "=".repeat(size) + "D"
}
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let b = args.join(" ")
let a = penis(b)
message.channel.send(a)}

exports.help = {
    name:"iq"

}

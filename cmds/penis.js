function penis(size) {
return "8" + "=".repeat(size) + "D"
}
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let b = randomIntInc(2, 20)
let a = penis(b)
message.channel.send(a)}

exports.help = {
    name:"penis"

}

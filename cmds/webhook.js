const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
   let webhook = message.channel.createWebhook('Snek', 'https://lh3.googleusercontent.com/proxy/VOUrNvO2N_9PXHBc4SqLT21agK1UzYnq5nbtpvx0fJQRE4S1QScYytFZOZuwZgam4bToviduXB--RXBXQgmwgocjgtRec-csOgv_6AMxQv38Dzb5XC67hdIALA')
   message.channel.send(webhook)
}
exports.help = {
    name: "wbh"
}

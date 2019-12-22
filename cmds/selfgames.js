const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Игровые роли :video_game:')
    .addField('Нажми на реакцию, чтобы получить',':pick: - Minecraft\n:hammer_pick: - Fortnite\n:blue_circle: - osu!\n:gun: - CS:GO')
    .setColor('#00ffff')
    
    message.channel.send(embed);
};
module.exports.help = {
    name: "itsapidor3247self"
}

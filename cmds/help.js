const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Помощь')
    .addField('——————————————————————————————————','``,avatar [@человек]`` - посмотреть аватарку человека\n``,tableflip`` - анимированный переворот стола\n``,ping`` - чекнуть пинг юзера\n``,iq [@человек]`` - проверить iq человека')
    .addField('——————————————————————————————————','``,8ball [вопрос]``- гадалка\n``,coin <Решка/Орел/Ребро>`` - орел, решка и ребро\n``,rr`` или ``,russian-roulette`` - русская рулетка\n``,cube`` - бросить кубик')
    .addField('——————————————————————————————————','``,random-number`` - бот отправляет случайное число\n``,random-color`` - отправляет случайный цвет, и его hex код\n')
    .setColor("#00ff14")
    
    message.member.send(embed);
let embed1 = new Discord.RichEmbed()
.setTitle('Меню помощи было выслано вам в лс.')
.setColor('#00ffff')
message.channel.send(embed1)
};
module.exports.help = {
    name: "help"
}

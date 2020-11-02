const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Помощь')
    .addField('——————————————————————————————————','``,avatar [@человек]`` - посмотреть аватарку человека\n``,tableflip`` - анимированный переворот стола\n``,ping`` - чекнуть пинг юзера\n``,iq [@человек]`` - проверить iq человека\n``,spinner`` - спиннер')
    .addField('——————————————————————————————————','``,8ball [вопрос]``- гадалка\n``,coin <Решка/Орел/Ребро>`` - орел, решка и ребро\n``,rr`` или ``,russian-roulette`` - русская рулетка\n``,cube`` - бросить кубик\n``,lovecalc`` - калькулятор любви')
    .addField('——————————————————————————————————','``,random-number`` - бот отправляет случайное число\n``,random-color`` - отправляет случайный цвет, и его hex код\n``,when`` - чекнуть, когда то или иное событие произойдет')
    .setColor('#ffffff')
    
    message.member.send(embed);
let embed1 = new Discord.RichEmbed()
.setTitle('Меню помощи было выслано вам в лс.')
.setColor('#ffffff')
message.channel.send(embed1)
};
module.exports.help = {
    name: "help"
}

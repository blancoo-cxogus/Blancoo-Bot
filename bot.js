global.Discord = require('discord.js')
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
bot.login(process.env.BOT_TOKEN)
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});


bot.on('ready', () => {
let status = [',help', ',help']
let status_res = Math.floor(Math.random() * status.length)
setInterval(() => {
bot.user.setActivity(status[status_res], {type: "Watching"}) }, 10000)

    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)

});

const configa = {
  voice: "724901156148740190",
  parent: "724901156148740187"
}
//Вместо инстансов GuildMember, используются инстансы VoiceState, что равносильно member.voice
bot.on("voiceStateUpdate", (oldState, newState) => {
  if(newState.channelID === configa.voice) {
    newState.guild.channels.create("Имя привата", {
      type: "VOICE",
      parent: configa.parent,
      permissionOverwrites: [
        {
           id: newState.guild.id, //Права для роли @everyone
           allow: ["VIEW_CHANNEL"]
        },
        {
          id: newState.member.id, //Права для создателя канала
          allow: ["VIEW_CHANNEL", "MANAGE_CHANNELS"]
        }
      ]
    }).then(ch => newState.setChannel(ch))
  }
  //удаление канала, если в нем больше не осталось человек
  if(oldState.channel && !oldState.channel.members.size && oldState.channel.parentID === configa.parent && oldState.channelID !== configa.voice) oldState.channel.delete();
})



    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });


bot.login(process.env.BOT_TOKEN)

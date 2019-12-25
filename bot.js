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
let status = ['За сервером Blancoo', ',help | Blancoo']
let status_res = Math.floor(Math.random() * status.length)
setInterval(() => {
bot.user.setActivity(status[status_res], {type: "Watching"}) }, 10000)
    const strftime = require('strftime'); // Без него тут никак xd
const vremya_po_msk = strftime.timezone(180);
setInterval(function() {
bot.channels.get('652752979979403275').setName(`🕥 ${vremya_po_msk('%H:%M', new Date())} по МСК`);
}, 60000);
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
bot.on('guildMemberAdd', member => { 
    var channel = member.guild.channels.get('649611799213375498')
    let welcome = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Добро пожаловать!')
        .setDescription(`На наш сервер зашел ${member}!`)
    const topic = channel.send(welcome)
    topic.react(`🎉`)
    channel.send(welcome)
})

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            coins:10,
            warns:0,
            xp:0,
            lvl:1,
        };
    };
    let u = profile[uid];

    u.coins++;
    u.xp++;

    if(u.xp>= (u.lvl * 5)){
        u.xp = 0;
        u.lvl += 1;
    };


    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});

var categoryID = '617301670661193729';
var voiceID = '640066442401677312';

bot.on('voiceStateUpdate',(Old,New)=>{
    if(New.user.bot) return;
    if(Old.user.bot) return;

    if(New.voiceChannelID == voiceID)
    {
            New.guild.createChannel(`⭐ ${New.user.tag}`, "voice",).then(set=>
        {
            New.setVoiceChannel(New.guild.channels.get(set.id)).then(()=>
            {
                set.setParent(New.guild.channels.get(categoryID));
            });
            set.overwritePermissions(New.user,
                {
                    'CONNECT':true,'SPEAK':true,
                    'MOVE_MEMBERS':false,'VIEW_CHANNEL':true,
                    'MANAGE_CHANNELS':true,'MANAGE_ROLES_OR_PERMISSIONS':false,
                    'USE_VAD':true,'PRIORITY_SPEAKER':true
                });
        });
    }


    if(Old.voiceChannel)
    {
        Old.guild.channels.forEach(channels=>
            {
                if(channels.parentID == categoryID)
                {
                    if(channels.id == voiceID) return;
                    if(Old.voiceChannelID == channels.id)
                    {
                        if(Old.voiceChannel.members.size == 0)
                        {
                            channels.delete();
                        }
                    }
                }
            });
    }
});
bot.login(process.env.BOT_TOKEN)

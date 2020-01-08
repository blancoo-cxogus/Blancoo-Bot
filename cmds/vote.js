  
const agree = ':white_check_mark:';
const disagree = ':negative_squared_cross_mark:';

module.exports = {
    name: 'vote',
    description: 'start a poll, and count votes at the end',
    usage: '[poll topic]',
    async execute(client, kayn, REGIONS, config, message, args, con, guilds) {
        let progress = new Discord.RichEmbed()
           .setColor('#00ffff')
           .setDescription("**Голосуем!**\n\nГолосование закончится через 15 секунд")
        let msg = await message.channel.send(progress);
        await msg.react(agree);
        await msg.react(disagree);
        let done = new Discord.RichEmbed()
           .setColor('#00ffff')
           .setDescription(`Голосование завершено! \n\n${agree}: ${reactions.get(agree).count - 1}\n${disagree}: ${reactions.get(disagree).count - 1})
        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name == agree || reaction.emoji.name == disagree, { time: 15000 });
        message.channel.send(done);
    },
};

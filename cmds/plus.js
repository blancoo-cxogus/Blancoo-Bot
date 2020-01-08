  let number1 = args[1].split(/ +/g);
  let number2 = args[2].split(/ +/g);
  var plus = number1 + number2
  let result = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription("Получается: " + plus)
  message.channel.send(result)

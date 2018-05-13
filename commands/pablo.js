const Discord = require("discord.js");

module.exports.run= async (bot, message, args) => {
  let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let bicon = bot.user.displayAvatarURL;
    let pabloembed = new Discord.RichEmbed()
    .setTitle("**Pablo**")
    .setColor("#45a17e")
    .setImage("http://s24193.pcdn.co/wp-content/uploads/2017/08/candice-horde-entitymag-@pixelmovecom-696x720.png")
    .setDescription(`${User} is ${message.author.username}'s bitch now`)
    return message.channel.send(pabloembed);
  }

  module.exports.help = {
    name: "pablo"
  }

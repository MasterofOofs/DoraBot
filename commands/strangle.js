const Discord = require("discord.js");

module.exports.run= async (bot, message, args) => {
  let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let bicon = bot.user.displayAvatarURL;
    let strangleembed = new Discord.RichEmbed()
    .setTitle("**Strangled**")
    .setColor("#45a17e")
    .setImage("https://vignette.wikia.nocookie.net/beelzebub/images/8/8f/Nene_chokes_Yuka.jpg/revision/latest?cb=20120419113654")
    .setDescription(`${message.author.username} strangles ${User}`)
    return message.channel.send(strangleembed);
  }

  module.exports.help = {
    name: "strangle"
  }

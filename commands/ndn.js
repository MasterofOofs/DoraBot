const Discord = require("discord.js");

module.exports.run= async (bot, message, args) => {
  let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let bicon = bot.user.displayAvatarURL;
    let ndnembed = new Discord.RichEmbed()
    .setTitle("**No Deigo no!**")
    .setColor("#45a17e")
    .setImage("https://i.pinimg.com/originals/55/cb/f6/55cbf6b760956d24e9890f3dbaa18285.jpg")

    return message.channel.send(ndnembed);
  }

  module.exports.help = {
    name: "ndn"
  }

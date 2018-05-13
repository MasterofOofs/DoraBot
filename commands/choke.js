const Discord = require("discord.js");

module.exports.run= async (bot, message, args) => {
  let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let bicon = bot.user.displayAvatarURL;
    let chokeembed = new Discord.RichEmbed()
    .setTitle("**Choked**")
    .setColor("#45a17e")
    .setImage("https://media.tenor.com/images/22563b2b0db01c6f54df5721a7328e26/tenor.png")
    .setDescription(`${message.author.username} chokes ${User}`)
    return message.channel.send(chokeembed);
  }

  module.exports.help = {
    name: "choke"
  }

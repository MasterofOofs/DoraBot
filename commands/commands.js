const Discord = require("discord.js");

module.exports.run= async (bot, message, args) => {
  let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let bicon = bot.user.displayAvatarURL;
    let commandsembed = new Discord.RichEmbed()
    .setTitle("**Commands**")
    .setColor("#45a17e")
    .setDescription(`List of Commands`)
    .addField('.strangle\n.choke\n.pablo\n.ndn\n.nmr\n.whip')
    return message.channel.send(commandsembed);
  }

  module.exports.help = {
    name: "commands"
  }

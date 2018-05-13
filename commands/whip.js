const Discord = require("discord.js");

module.exports.run= async (bot, message, args) => {
  let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let bicon = bot.user.displayAvatarURL;
    let whipembed = new Discord.RichEmbed()
    .setTitle("**Whipped**")
    .setColor("#45a17e")
    .setImage("https://vignette.wikia.nocookie.net/thebackyardigansencyclopedia/images/9/92/Cowboy_Pablo.jpg/revision/latest?cb=20110426192623")
    .setDescription(`${message.author.username} whips ${User}`)
    return message.channel.send(whipembed);
  }

  module.exports.help = {
    name: "whip"
  }

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let goldd = args.slice(0).join(" ");
  const gold = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${goldd}`)
  message.channel.send(gold);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "embed",
  description: "Yazdığınızı Mesajı Embedli Atar.",
  usage: "embed",
  category: "Kullanıcı"
};
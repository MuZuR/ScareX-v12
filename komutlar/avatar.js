const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let trdev = message.mentions.users.first() || message.author;
  const devtr = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random() * 16777215))
    .setAuthor(trdev.username + " Adlı Kişinin Profil Fotoğrafı")
    .setImage(trdev.displayAvatarURL())
    .setFooter("Komut " + message.author.username + " | Tarafından Kullanıldı");
  message.channel.send(devtr);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pp", "avatar"],
  permLevel: 0
};
exports.help = {
  name: "pp",
  description:
    "Etiketlediğiniz kullanıcının avatarını veya Etiket Atmadan Kullanırsanız Kendi Avatarınızı gösterir.",
  usage: "pp"
};

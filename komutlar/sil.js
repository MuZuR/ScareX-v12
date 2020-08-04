const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return errors.noPerms(message, "MANAGE_MESSAGES");
  if (!args[0])
    return message.reply(
      " En Az `1 - 400` Arasında Bir Tam Sayı Değeri Girmelisiniz."
    );
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`**${args[0]} Adet mesaj silindi!`)
      .then(msg => msg.delete(400));
  });
};

module.exports.help = {
  name: "sil"
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "",
  usage: ""
};
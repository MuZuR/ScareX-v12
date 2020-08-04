const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.channel.send(`*Dil değiştirmek için bir dil kodu belirtmelisiniz. \`/dil tr-en\`*`)
  
  if (args[0] === "tr" || args[0] === "türkçe") {
    db.set(`${message.guild.id}.dil`, "Türkçe");
    message.channel.send(`Dikkat, botun dili şuandan itibaren Türkçe'dir.Yazdığınız komutlar ve değerler Türkçe olması gerekmektedir.Dili değiştirmek için \`/dil <istediğiniz dil>\``)
  }
  
  if (args[0] === "en" || args[0] === "english") {
    db.set(`${message.guild.id}.dil`, "English")
    message.channel.send(`Attention, the language of the bot is from now on Turkish. The commands and values we wrote must be in Turkish.`)
  }
  
}
exports.conf = {
aliases: []
}
exports.help = {
  name: "dil"
}
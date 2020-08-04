const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Rol Alıcağım Kişiyi Etiketle!**').catch(console.error);
  if (rol.length < 1) return message.reply('**Alıncak Rolü Etiketlemelisin!**');
user.roles.remove(rol)
const devtr = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü alındı!`)
        .setFooter('ScareX', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send(devtr)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol-al',
  description: 'İstediğiniz kişiden istediğiniz rolü alır.',
  usage: 'rol-al [kullanıcı] [@rol]'
};
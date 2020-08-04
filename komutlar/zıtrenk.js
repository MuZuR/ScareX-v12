 const Discord = require('discord.js');
var Jimp = require('jimp');
exports.run = (client, message, params) => {
  
  let user = message.mentions.users.first() || message.author;
  
      Jimp.read(user.avatarURL({ dynamic: true, format: 'png', size: 1024 })), function (err, image){
          image
          image.invert().write('./x/zıt-renk.png');
          
           let a = new Discord.MessageAttachment('./x/zıt-renk.png')
            message.channel.send(a);
          
      };
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invert"],
  permLevel: 0,
};
exports.help = {
  name: 'zıtrenk',
  description: 'Avatarınızın rengini tersine çevirir.',
  usage: 'zıt-renk veya zıt-renk <@kullanıcı>'
};
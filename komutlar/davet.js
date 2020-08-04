const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
   .setColor('RANDOM')
 .addField(`» Linkler`, `[Web](https://scarexbot.glitch.me/) | [Beni Ekle](https://discord.com/oauth2/authorize?client_id=738821100791660556&scope=bot&permissions=8)`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 
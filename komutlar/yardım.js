const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField('-ekonomi','**Ekonomi komutlarını gösterir.**')
    .addField('-kullanıcı ','**Kullanıcı komutlarını gösterir.**')
    .addField('-bot','**Bot komutlarını gösterir.**')
    .addField('-moderasyon','**Moderasyon komutlarını gösterir.**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/738483242302439607/738780834063974581/IMG_20200718_123732.jpg') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y' , 'help' , 'yardim'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};
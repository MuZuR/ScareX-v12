const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField ('-ban-log','**Ban logunu ayarlar.**')
    .addField ('-ban-yetkili-rol','**Banı atabilecek rolü ayarlar.**')
    .addField ('-ban','**Etiketlediğiniz kullanıcıyı banlar.**')
    .addField ('-kick-log','**Kick logunu ayarlar.**')
    .addField ('-kick-yetkili-rol','**Kicki atabilecek rolü ayarlar.**')
    .addField ('-kick','**Etiketlediğiniz kullanıcıyı kickler.**')
    .addField ('-küfür-engel','**Sunucuda küfür edilmesini engeller**')
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
 name: 'moderasyon'
};
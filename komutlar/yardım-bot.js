const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField('-davet','**Botun davet linkini gösterir.**')
    .addField('-botbilgi ','**Botun bilgilerini gösterir.**')
    .addField('-kullanıcıbilgi','**Etiketlediğiniz kullanıcının bilgisini size gösterir.**')
    .addField('-ping','**Bot pingini gösterir.**')
    .addField('-sunucubilgi','**Sunucu bilgisini gösterir.**')
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
 name: 'bot'
};
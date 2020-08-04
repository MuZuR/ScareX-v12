const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RED')
    .addField('-günlük-para','**Günlük Paranızı verir (24 Saatte Bir Kullanılabilir)**')
    .addField('-hesap-aç','**Banka Hesap Açar (+20 Lira Verir)**')
    .addField('-hesabımı-sil','**Banka Hesabınızı Siler**')
    .addField('-hesap','**Banka Hesabınız Hakkında Bilgi Verir**')
    .addField(',--gönder','**Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir**')
    .addField('-para','**Bankadaki Paranızı Belirtir**')
    .addField('-market','**Markteti Gösterir**')
    .addField('-döviz','**Güncel döviz kurlarını alırsınız**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/738483242302439607/738780834063974581/IMG_20200718_123732.jpg') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['yardıme' , 'ekonomi'],
 permLevel: 0
};

exports.help = {
 name: 'ekonomi'
};
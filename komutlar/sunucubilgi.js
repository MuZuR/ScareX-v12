const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const svo = require('svo-client');

exports.run = async (client, message, params) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
  const tah = await svo.tarih(message.guild.createdAt)
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor("#cfc9c9")
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addField('İsim', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Bölge', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayısı:', message.guild.channels.cache.size)
    .addField('Oluşturulma tarihi:', tah)
    return message.channel.send(sunucubilgi);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi' , 'scbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
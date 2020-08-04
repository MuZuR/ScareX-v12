const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
let kişi = message.mentions.members.first() 
if (!kişi) return message.reply('**Kişi Belirt**')

  let parası = await db.fetch(`para_${kişi.id}`) 
  let hesap =  await db.fetch(`hesap-${message.guild.id}`)
  
  if (kişi.bot) return message.reply('**Botlar RitCoin Alamaz?**')
    if (kişi.id === message.author.id) return message.reply('**Kendine RitCoin Gönderemezssin**')

let paragönderme = args.slice(1).join(' ')

if (!paragönderme) return message.reply('Miktar Belirt')
  
  ///yenı komut yerı acıyorum tamam
  if (isNaN(paragönderme)) return message.reply('**RitCoin Miktar**')
  if (parası < paragönderme) return message.reply('**RitCoinden Büyük Miktar Gönderemezssin**')

  
  db.add(`para_${kişi.id}`, paragönderme)
  db.add(`para_${message.author.id}`, -paragönderme)
  return message.reply(`${kişi} Adlı Kullanıcıya ${paragönderme} Kadar RitCoin Gönderildi Ve RitCoininden ${paragönderme} Kadar Düştü!`)
  
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {

  name: 'para-gönder'
};

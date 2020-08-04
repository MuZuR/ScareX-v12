const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment")
require("moment-duration-format")
const dateFormat = require("dateformat")
exports.run = async (client, message, args) => {
 
  var user = '';
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        let author = message.author;
        if(member) {
             var user = member;
        } else {
             var user = author;
        }    
    member = message.guild.member(user);
   //#DevTR 
      const devtrCreated = new Date().getTime() - user.createdAt.getTime();
    const DevTR = moment.duration(devtrCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const devtrJoined = new Date().getTime() - member.joinedAt.getTime();
    const devtr3 = moment.duration(devtrJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
 //#DevTR
    let ozeldurum = user.presence.activities[0] || 'Özel durumun yok'
        const Durum = user.presence.status;
        const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        const devtr1 = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const devtr_kod_paylasim = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL)    //#DevTR 
      .setTitle("Kullanıcı")
      .setColor(0xffb900)
      .addField("Şu anda oynadığı oyun:", `${user.presence.game ? user.presence.game.name : 'Oynadığı Bir Oyun Yok'}`)
      .addField("Custom Status:", ozeldurum.state || "Özel Durum Yok")
      .addField("Durum:", devtr1)
      .addField("Katılım tarihi [Sunucu]:", devtr3)
      .addField("Katılım tarihi [Discord]:", DevTR)
      .addField("Kimlik:", ` ${user.id}`, false)
      .addField("Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`, false)    //#DevTR 
      .addField("Sahip olduğu roller:", message.guild.member(user).roles.cache.filter(s => s.name !== '@everyone').map(m => m.name).join(', '))
      .addField("Son gönderdiği mesajı:", user.lastMessage || 'Yok')    //#DevTR 
      .addField("Hesap Oluşturulma tarihi:", moment(user.createdAt).format('DD/MM/YYYY'))
      .setFooter(`${user.tag} tarafından istendi`, user.avatarURL())    //#DevTR 
      message.channel.send(devtr_kod_paylasim)    //#DevTR 
}
    //#DevTR 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı-bilgi" , "kcbilgi" , "kc-bilgi"],
  permLevel: 0
};
 
exports.help = {
  name: 'kullanıcıbilgi',
  description: '#DevTR',
  usage: '#DevTR'
};
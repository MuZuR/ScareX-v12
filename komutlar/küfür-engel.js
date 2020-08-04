const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`devtr.kufur_${message.guild.id}`, "devtr")
    message.channel.send('**Bu özellik aktif edildi.**')
  return
}
if (args[0] === 'kapat') {
  db.delete(`devtr.kufur_${message.guild.id}`)
message.channel.send('**Bu özellik devre dışı bırakıldı.**')
return
}
  message.channel.send('Lüten **aç** yada **kapat** Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};
exports.help = {
 name: 'küfür-ayarla',
 description: '',
 usage: ''
};

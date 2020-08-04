const codare = require('discord.js')
exports.run = async(message, args) => {

if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için "Kullanıcıları Yasakla" Yetkisine Sahip Olmalısın!`)


let tanersins = args[0]
if(!tanersins) {
  message.channel.send(new codare.MessageEmbed())
.setTitle("Hatalı!")
.setDescription(`Lütfen yasağı kaldırılacak kişinin kullanıcı ID’sini giriniz`)
.setFooter(`${message.author.tag} Tarafından istendi!`)
.setColor("RED")
if (isNaN(tanersins)) {
  message.channel.send(new codare.MessageEmbed())
.setTitle("Hatalı!")
.setDescription(`Lütfen doğru bir ID Giriniz!`)
.setColor("RED")
.setFooter(`${message.author.tag} Tarafından istendi!`)

const embeed = await message.guild.fetchBans();
message.guild.members.unban(tanersins)  
if (!tanersins.id === embeed) {
  message.channel.send(new codare.MessageEmbed())
.setTitle("Hatalı!")
.setDescription(`Bu kişi zaten yasaklanmış!`)
.setColor("RED")
.setFooter(`${message.author.tag} Tarafından istendi!`)

  message.channel.send(new codare.MessageEmbed())
.setTitle("Başarılı!")
.setDescription(`<@!${tanersins}> Adlı kullanıcının yasağı başarı bir şekilde kaldırıldı!`)
.setColor("GREEN")
.setFooter(`${message.author.tag} Tarafından istendi!`)
}
}
}

}
//codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'unban',
  description: 'Herhangi bir kullanıcının IDsini belirterek yasapı kaldırabilirsiniz',
  usage: 'unban <id>'
}
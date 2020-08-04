const Discord = require ("discord.js");
exports.run = (client, message) => {

  const baban = message.guild.roles.cache.filter(devtr => devtr.name !== '@everyone').map(devtr => devtr).join(' | ') || 'Bulunmuyor'
  const sa = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(baban)
  .setFooter("Sunucudaki Roller")
  message.channel.send(sa)
  console.log(`Kolgh`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol"],
  permLevel: 0
};
exports.help = {
  name: 'Roller',
};

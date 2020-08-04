const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply(`Güncel Covid-19 vaka istatistiklerini buradan görebilirsin. Ülkeye özel istatistikler için ${ayarlar.prefix}corona <ülke kodu> komutunu kullanabilirsin. #evdekal **Doğru Kullanım:** __${ayarlar.prefix}korona <ülke kodu>__`)

let a = args[0].toLowerCase()

  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('japonya', 'JP')
  .replace('fransa', 'FR')
  .replace('norveç', 'NE')
  .replace('isveç',  'SN')

 
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let region = body.countrydata[0].info.title
  var virus = [
      "Ah Nalet Olsun Virüs Kapmışsın!",
      "Oh! Sorun Yok Virüs Kapmamışsın",
      "Mm! Vakaya Yeni Kapılmışsın Doktora Gitmelisin.",
      "Huh! Vakayı Başarıyla Atlatmış Gözüküyorsun."
  ]
  var random = virus[Math.floor(Math.random() * virus.length)];
  let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('COVID-19 Anlık İstatistik Tablosu')
    .setDescription(`Ülke: **${region}**`)
    .setThumbnail('https://www.diken.com.tr/wp-content/uploads/2020/01/corona_reuters-copy.jpg')
    .addField('*:microbe: Toplam Vaka:*',`\`\`〘 →${body.countrydata[0].total_cases}← 〙\`\` `)
    .addField('*:syringe: Toplam İyileşen:*',`\`\`〘 →${body.countrydata[0].total_recovered}← 〙\`\` `)
    .addField('*:dna: Toplam Enfekte:*',`\`\`〘 →${body.countrydata[0].total_active_cases}← 〙\`\` `)
    .addField('*:skull_crossbones: Toplam Ölümler:*',`\`\`〘 →${body.countrydata[0].total_deaths}← 〙\`\` `)
    .addField('*:test_tube: Bugünkü Vakalar:*',`\`\`〘 →${body.countrydata[0].total_new_cases_today}← 〙\`\` `, true)
    .addField('*:warning: Bugünkü Ölümler:*',`\`\`〘 →${body.countrydata[0].total_new_deaths_today}← 〙\`\` `, true)
    .addField('*:bangbang: Ciddi Vakalar:*',`\`\`〘 →${body.countrydata[0].total_serious_cases}← 〙\`\` `, true)
    .addField('*:bust_in_silhouette:   Kullanıcı (sen):*',`\`\`〘 → ${random} ← 〙\`\` `)
    .setTimestamp()
    .setFooter('COVID-19 | DevTR', client.user.avatarURL());
    message.channel.send(embed)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virüs'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 'Corona virüs anlık gösterge tablosu.',
  usage: 'korona'
};

const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 var espriler = ['5','10','50','100','200','500','1000'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

  let yavaşmod = 8.64e+7, // 24 Saat

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await db.fetch(`günlükbea_${message.guild.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));





      return message.reply(`**Her 24 Saate Bir RitCoin Alabilirsin**`)

      

    } else {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(`**Hesabına ${espri} kadar RitCoin gönderildi**`);
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["daily" , "günlük"],
  permLevel: 0
};

exports.help = {
  name: 'günlük-para'
};


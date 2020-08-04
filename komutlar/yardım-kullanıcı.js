const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField('-pp','**Etiketlediğiniz kişinin avatarını atar. (etiketlemezseniz sizinkini atar)**')
    .addField('-davet ','**Botun davet linkini atar.**')
    .addField('-emoji','**Sunucudaki emojileri gösterir. #güncellenicek kendiniz tepki vererek şimdilik kullanabilirsiniz**')
    .addField('-havadurumu','**Güncel hava durumu verilerini tablo halinde gösterir.**')
    .addField ('-korona','**Güncel korona verilerini tablo halinde gösterir.**')
    .addField ('-kralol','**Kral olursunuz.**')
    .addField ('-tkm','**Botla taş kağıt makas oynarsınız.**')
    .addField ('-link-kısalt #yakında','**Attığınız herhangi bir linki kısaltılmış olarak size geri atar.**')
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
 name: 'kullanıcı'
};
//.addField ('','****')
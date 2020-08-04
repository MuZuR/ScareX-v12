const Discord = require("discord.js");
const snekfetch = require('snekfetch');
exports.run = async (message, args) => {
    const url = args.join("")
    try {
        const { body } = await snekfetch
            .post('https://www.googleapis.com/urlshortener/v1/url')
            .query({
                longUrl: url,
                key: "AIzaSyAhVltQOpS8vY-pUWyIMUCSsf8HYKUP8ts" 
            })
            .send({
                longUrl: url
            });
        message.channel.send(`Kısaltılan link: ${body.id}`);
    } catch (err) {
        message.reply(`Bir hata ile karşılaşıldı! \`${err.message}\``);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["l"],
  permLevel: 0,

};

exports.help = {
  name: "link-kısalt"
};
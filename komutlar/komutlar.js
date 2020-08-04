const Discord = require('discord.js')

exports.run = async (client, message, args) => { 
     try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`);
    } catch (e) {
        throw e;
    }
}

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["k"],
    permLevel: 0,
}

exports.help = {
    name: 'komutlar', 
}
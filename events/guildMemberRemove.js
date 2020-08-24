const Discord = require('discord.js')

/**
 * O evento guildMemberAdd é emitido após um membro entrar (ser adicionado em uma guild).
 */
let date = new Date;

module.exports = async (client, member) => {
  const message = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setColor('RANDOM')
    .setAuthor('Um membro saiu do bando.')
    .setDescription(`Infelizmente o(a) ${member} deixou o bando as ${date} .`)
    .setFooter('KETwitch 🦇')
    .setImage('https://media.giphy.com/media/fHojwrioxmHoSiyHIK/giphy.gif')
    .setTimestamp();

  member.guild.channels.cache.get(process.env.LEAVECHANNEL).send(message).catch();
}

const Discord = require('discord.js')

/**
 * O evento guildMemberAdd é emitido após um membro entrar (ser adicionado em uma guild).
 */

module.exports = async (client, member) => {
  const message = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setAuthor('👤 Um membro saiu do servidor!')
    .setDescription(`${member} acabou de sair.`)
    .setFooter('KETwitch 🦇')
    .setTimestamp();

  member.guild.channels.get(process.env.LEAVECHANNEL).send(message).catch();
}

const moment = require('moment')
const Discord = require('discord.js')

/**
 * O evento guildMemberAdd é emitido após um membro entrar (ser adicionado em uma guild).
 */

module.exports = async (client, member) => {
  // Verificações anti-selfbot de divulgação já que estamos tendo problemas com isso.
  const daysSinceCreation = moment().diff(moment(member.user.createdAt), 'days')
  const isDefaultAvatar = message.member.user.displayAvatarURL.startsWith('https://discordapp.com/')
  const domaincount = member.user.username.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/)
  if (domaincount > 0 && (isDefaultAvatar || daysSinceCreation < 3)) return (() => { member.send('Olá! você foi kickado automaticamente por suspeita de divulgação em nosso servidor. Contas com menos de 3 dias no discord não podem ter domínios (exemplo twitter.com)').catch(); member.kick('Autokick: Selfbots não são bem vindos').catch() })()

  const message = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setAuthor('👋 Bem-vindo(a) a KETwitch 🦇!')
    .setTitle('Tire duvidas e compartilhe conhecimentos!')
    .setDescription(`${member}, vá em <#746076520799535118> e leia as regras do server.`)
    .setFooter('KETwitch 🦇')
    .setTimestamp()

  const join = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setAuthor('✨ Um novo membro entrou no bando!')
    .setDescription(`${member} acabou de entrar.`)
    .setFooter('KETwitch 🦇')
    .setTimestamp()

  member.guild.channels.get(process.env.JOINCHANNEL).send(join).catch()
  member.guild.channels.get(process.env.GREETCHANNEL).send(message).catch()
}

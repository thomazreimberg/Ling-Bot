const moment = require('moment')
const Discord = require('discord.js')

/**
 * O evento guildMemberAdd é emitido após um membro entrar (ser adicionado em uma guild).
 */

module.exports = async (client, member) => {
  let channel1 = member.guild.channels.cache.get(process.env.REGRAS);
  let channel2 = member.guild.channels.cache.get(process.env.INFO);
  // Verificações anti-selfbot de divulgação já que estamos tendo problemas com isso.
  const daysSinceCreation = moment().diff(moment(member.user.createdAt), 'days');
  const domaincount = member.user.username.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/)
  if (domaincount > 0 && (isDefaultAvatar || daysSinceCreation < 3)) return (() => { member.send('Olá! você foi kickado automaticamente por suspeita de divulgação em nosso servidor. Contas com menos de 3 dias no discord não podem ter domínios (exemplo twitter.com)').catch(); member.kick('Autokick: Selfbots não são bem vindos').catch() })();

  const message = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(member.user.tag, member.user.displayAvatarURL)
    .setTitle(`:heart: Um novo membro entrou no server! :heart:`)
    .setDescription(`Seja bem-vindo(a) ${member} ao discord da KETwitch, não esqueça de aceitar as ${channel1} e dar uma passada na sala ${channel2} . Divirta-se com os outros vampirinhos`)
    .setImage('https://media.giphy.com/media/834kG1EeAcdUX3xwzM/giphy.gif', {size: 1024})
    .setFooter('KETwitch 🦇')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setTimestamp();
  
  member.guild.channels.cache.get(process.env.JOINCHANNEL).send(message).catch();
}

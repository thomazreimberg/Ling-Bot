const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    const m = await message.channel.send('ping?');
    const embed = new Discord.MessageEmbed()
      .setAuthor(`🏓 | Pong!\n ⚡️Latência do Server: ${m.createdTimestamp -
        message.createdTimestamp}ms.\n🦄 Latência da API: ${Math.round(
        client.ws.ping
      )}ms**`)
      .setColor(message.member ? message.member.displayColor : global.CLIENT_DEFAULT_COLOR)
      .setFooter("KETwitch 🦇", client.user.displayAvatarURL);

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'ping',
      description: 'Mostra a latência do bot.',
      usage: 'ping',
      category: 'Info'
    }
  }
}

const connection = require('../database/connection');
/**
 * O Evento message é emitido toda vez que o bot recebe uma mensagem.
 * Podemos usar este evento como uma espécie de middleware para impedir vulnarabilidades ou outras coisas.
 */
module.exports = async (client, message) => {
  /** É uma boa pratica ignorar outros bots. isso faz o bot se auto-ignorar também.
   * E Também não entrara em um loop de spam...
   */
  if (message.author.bot) return
  if (message.author.type === 'dm') return
  if (message.content.startsWith(`<@!${client.user.id}`) || message.content.startsWith(`<@${client.user.id}`)) return

  // Checamos se a mensagem é do canal #apresente-se
  if (message.channel.id === process.env.APRESENTACAO) {
    // Checamos se o usuario tem a role "Apresentado"
    const role = message.guild.roles.find('name', 'Apresentado');
    if (!message.member.roles.exists('name', role.name)) {
      // Se nao tiver, adicionamos ela
      message.member.addRole(role).catch(console.error);
      const emoji = message.guild.emojis.find(emoji => emoji.name === 'liga');
      message.react(emoji);
    } else {
      // Se ja tiver, a mensagem e considerada como spam e é removida
      // Define um objeto especificando o embed
      const embed = {
        color: 16739451,
        title: 'Como resetar seu status de apresentação:',
        description: '**Hey**, caso você tenha errado a digitação de algo em sua mensagem de apresentação, basta digitar o comando `p!reset` no *chat de comandos do servidor* para resetar a sua apresentação!'
      }
      message.author.send({
        embed: embed
      })
        .catch(() => message.reply('me desculpe, mas eu não tenho permissões para enviar DM para você!'))
      message.delete().catch(console.error)
    };
    return
  }

  if (message.channel.id === process.env.SUGESTOES || message.channel.id === process.env.PROJETOS) {
    if (message.content.startsWith('^')) return
    await message.react('662625034770186241');
    await message.react('662624803756441600');
    return
  }

  if (message.channel.id === process.env.DESAFIOS) {
    await message.react('✅');
    return
  }
  /**
   * Responde caso algum user mande mensagem
   */
  if (message.channel.id === process.env.CHAT || message.channel.id === "709085150570610768" || message.channel.id === "651819350273294336" ||
      message.channel.id === "695392882319687762") {
    let constains = false;
    const greatings = ['ba dia', 'bom dia', 'bom dia!', 'ba dia!', 'ba diaa', 'ba diaa!', 'bom diaa', 'bom diaa!', 'bom diaaaa', 'buenos dias',
                       'buenos dias!'];

    for (var i = 0; i < greatings.length; i++) {
      let msg = message.content;
      if (msg.toLowerCase().includes(greatings[i])) {
        constains = true;
      }
    }
    
    if (constains == true){
        message.channel.send('ba diaa senpai! 💟💟');
    } else {
      //nada acontece
    }
  }

  /** Então nós separamos o nome do comando de seus argumentos que são passados ao comando em si. */
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  /** Então se o comando existir ele irá ser executado.
   * Além disso o console também exibira o comando executado e quem o executou.
   */
  const cmd = client.commands.get(command);
  if (!cmd) return
  
  let id_user = message.author.id;
  let nk_user = message.author.username
  let nm_command = cmd.help.name;
  let dt_executed = new Date();

  console.log('log', `${nk_user} (${id_user}) executou o comando: ${nm_command}`);
  await connection('tb_log').insert({
    id_user,
    nk_user,
    nm_command,
    dt_executed,
  });

  if (cmd.conf.onlyguilds && !message.guild) return // Guild check
  cmd.run(client, message, args);
}

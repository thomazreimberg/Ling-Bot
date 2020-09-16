module.exports = {
    run: (client, message, args) => {
        let complement = ' foi banido(a) permanentemente desse servidor.';
        let argsresult = "";
        const mChannel = message.mentions.channels.first();
        
        if (mChannel) {
            argsresult = args.slice(1).join(' ');
            if (argsresult.length > 20){
                message.channel.send('Input inválido senpai, vai tomar ban hein...');
            } else {
                mChannel.send(argsresult + complement);
            }
          } else {
            argsresult = args.join(' ');
            if (argsresult.length > 20){
                message.channel.send('Input inválido senpai, vai tomar ban hein...');
            } else {
                message.channel.send(argsresult + complement);
            }
        }
    },
  
    conf: {},
  
    get help () {
      return {
        name: 'ban',
        category: 'Punição',
        description: 'Da ban em alguém.',
        usage: 'ban',
      }
    }
  
  }

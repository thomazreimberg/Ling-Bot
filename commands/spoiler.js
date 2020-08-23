module.exports = {
    run: (client, message, args) => {
  
      let argsresult = "Não dê nenhum spoiler do joguinho. Apenas se a streamer pedir. Sujeito a timeout de alguns dias.";
      const mChannel = message.mentions.channels.first();
      
      if (mChannel) {
        mChannel.send(argsresult)
      } else {
        message.channel.send(argsresult)
      }
    },
  
    conf: {},
  
    get help () {
      return {
        name: 'spoiler',
        category: 'Info',
        description: 'Faz o bot dar um aviso sobre spoiler.',
        usage: 'spoiler'
      }
    } 
}  
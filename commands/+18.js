module.exports = {
    run: (client, message, args) => {
        let argsresult = 'Já se perguntou pq a live é +18? Nós falamos sobre a vida, a verdade, o universo.'
        + 'Falamos também sobre filosofia, sobre política e sobre a situação econômica mundial. '+ 
        'Se você estava procurando uma E-Grill sem posição política (mentira) que cursa história, esse é o lugar.' + 
        ' Aqui você é livre, mas nem tanto. Nossos questionamentos são profundos demais para crianças, mas se você for uma, tudo bem.' 
        + ' Bem vindo(a) a web aula +18 da ket Kappa';
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
        name: '+18',
        category: 'Info',
        description: 'Explica porque tem o +18 nas lives.',
        usage: '+18',
      }
    }
  
  }

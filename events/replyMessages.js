/**
 * O Evento replyMessage é emitido toda vez que o bot recebe uma mensagem o cumprimentando.
 * Ele só vai responder caso um usuário o mencione.
 */

module.exports = async (client, message) => {
   /** É uma boa pratica ignorar outros bots. isso faz o bot se auto-ignorar também.
   *   E também não entrara em um loop de spam...
   */
    if (message.author.bot) return 

    let constains = false;
    const greatings = ['ba dia', 'bom dia', 'bom dia!', 'ba dia!', 'ba diaa', 'ba diaa!', 'bom diaa', 'bom diaa!'];

    greatings.forEach(element => {
        if(message.constains(element)){
            constains = true;
        }
    });
    
    if(constains == true){
        message.channel.send('ba diaa senpai! 💟💟');
    } else {
        return
    }  
}
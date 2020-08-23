/**
 * O Evento replyMessage é emitido toda vez que o bot recebe uma mensagem.
 * Nesse caso ele vai responder caso um usuário o mencione
 */

module.exports = async (client, message) => {
    /** É uma boa pratica ignorar outros bots. isso faz o bot se auto-ignorar também.
   * E Também não entrara em um loop de spam...
   */
    if (message.author.bot) return 
}
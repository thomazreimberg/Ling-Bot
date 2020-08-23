const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NzQ3MDE4NjIzOTk3OTY4NDg4.X0IxTg.EeNcMT2-TbxFQlFZr5ET1Vu8dPY');

bot.on('message', message => {
    let responseObject = {
        "bom dia" : "Bom dia!",
        "ba dia" : "Ba diaa!"
    };

    message.content = message.content.toLowerCase();
    
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }
});
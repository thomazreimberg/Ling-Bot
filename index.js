const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NzQ3MDE4NjIzOTk3OTY4NDg4.X0IxTg.EeNcMT2-TbxFQlFZr5ET1Vu8dPY');

bot.on('message', message => {
    let botName = bot.user.username.toString();
    console.log(bot.user.username);
    let responseObject = {
        [`bom dia @${botName}`] : "Bom dia!",
        [`bom dia! ${botName}`] : "Bom dia!!",
        [`ba dia ${bot.}`] : "Ba diaa!",
        [`ba dia! ${botName}`]: "Ba diaa!!"
    };

    message.content = message.content.toLowerCase();

    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }
});
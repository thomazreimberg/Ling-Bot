const connection = require('./database/connection');
const tmi = require('tmi.js');

require('dotenv').config();

// Define configuration options
const opts = {
    options: {
        debug: true,
        messagesLogLevel: "info"
    },

    connection: {
        reconnect: true,
        secure: true
    },

    identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
    },

    channels: [
    process.env.CHANNEL_NAME
    ]
};

const LogmodController =  require('./database/controllers/LogmodController');
const LogtwitchController =  require('./database/controllers/LogtwitchController');

module.exports = {
    async index() {
        // Create a client with our options
        const client = new tmi.client(opts);
        
        // Register our event handlers (defined below)
        client.on('message', onMessageHandler);
        client.on('connected', onConnectedHandler);
        client.on('clearchat', onTest);
        // Connect to Twitch:
        client.connect().catch(console.error);
        
        // Called every time a message comes in
        function onMessageHandler (channel, tags, message, self) {
            if (self) { return; } // Ignore messages from the bot

            // Remove whitespace from chat message
            const commandName = message.trim().toLowerCase();
            // If the command is known, let's execute it
            if (commandName == 'boa noite' || commandName == 'ba noite' || commandName == 'noite' && tags.username !== 'lingming_') {
                //client.say(channel, 'boa noite');
                console.log('ba noite');
            } else if (commandName == 'boa tarde' || commandName == 'ba tarde' || commandName == 'tarde' && tags.username !== 'lingming_') {
                //client.say(channel, 'ba tarde');
                console.log('ba tarde');
            } else if (commandName == 'bom dia' || commandName == 'ba dia' || commandName == 'dia' && tags.username !== 'lingming_') {
                //client.say(channel, 'ba dia');
                console.log('ba dia');
            } else {
                //Nothing for while
            }
            createLog(tags, message);
        }
        
        // Called every time the bot connects to Twitch chat
        function onConnectedHandler (addr, port) {
            console.log(`* Connected to ${addr}:${port}`);
        }

        // Insert log into table tb_logtwitch
        function createLog (message_tag, message_log) {
            LogtwitchController.create(message_tag, message_log)
        }

        function onTest () {
            console.log('Opa, acabei de limpar o chat.')
        }
    }
}

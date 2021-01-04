if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.');

const indextt = require('./indextt');

require('dotenv').config()
const Discord = require('discord.js');
const { readdirSync } = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();

client.commands = new Enmap();
client.startTime = Date.now();

const cmdFiles = readdirSync('./commands/');

cmdFiles.forEach(f => {
  try {
    const props = require(`./commands/${f}`)
    if (f.split('.').slice(-1)[0] !== 'js') return

    if (props.init) props.init(client)

    client.commands.set(props.help.name, props);
    if (props.help.aliases) {
      props.alias = true;
      props.help.aliases.forEach(alias => client.commands.set(alias, props));
    }
  } catch (e) {
    //console.log(`Impossivel executar comando ${f}: ${e}`);
    //Adiconar tabela de log
  }
})

const evtFiles = readdirSync('./events/');
evtFiles.forEach(f => {
  const eventName = f.split('.')[0];
  const event = require(`./events/${f}`);

  client.on(eventName, event.bind(null, client));
})

client.login(process.env.AUTH_TOKEN); /* Inicia o Bot. */

indextt.index();
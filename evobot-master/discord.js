const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODI1ODIyNjg5MzE3ODc5ODMw.YGDhUA.TckkkveC9r3lcE5THJMkioWb4ZM');
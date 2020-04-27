const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('¡Estoy Listo!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.YGLwKNqTBw4TTHmndyodsXAUpZAxQHsA);

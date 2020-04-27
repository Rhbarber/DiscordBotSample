const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzA0MTY4NDk0MzU0MjY4MTgx.XqZW1w.xGcCEqXBqUa5C8hk-tPiP1QS2Bk);

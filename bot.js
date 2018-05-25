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

client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.sendFile("ﯡڷــﯖــم ۖ مــڼــﯜڔ ۛ ּڀــ̍ا ̨؏ــڛــڶ ۖ مــن ڙمــٱن ּ؏ــڼــک :green_heart:");
            }
         });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

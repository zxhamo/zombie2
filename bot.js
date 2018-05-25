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

 if (msg.content === 'باك') {
    msg.reply('**ﯡڷــﯖــم ۖ مــڼــﯜڔ ۛ ּڀــ̍ا ̨؏ــڛــڶ ۖ مــن ڙمــٱن ּ؏ــڼــک :green_heart:**');
  }
});

 if (msg.content === 'برب') {
    msg.reply('**تٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:**');
  }
});

 if (msg.content === 'رابط') {
    msg.reply('**``https://discord.gg/EXNztT6``**');
  }
});

 if (msg.content === 'الرابط') {
    msg.reply('**``https://discord.gg/EXNztT6``**');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

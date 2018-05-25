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

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.channel.send('**وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:**');
  }
});;

client.on('message', msg => {
  if (msg.content === 'رابط') {
    msg.channel.send('**``https://discord.gg/EXNztT6``**');
  }
});;

client.on('message', msg => {
  if (msg.content === 'الرابط') {
    msg.channel.send('**``https://discord.gg/EXNztT6``**');
  }
});;

client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('** ٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointe**');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

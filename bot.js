const Discord = require("discord.js");
const client = new Discord.Client();
const eks = require("./ekstra.json");

var prefix = "/test";

client.on('ready', () => {
  console.log('Giris Saglandi');
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  client.user.setGame('/test | Zappara TEST |');
});

client.on('message', msg => {
  if (msg.content === 'Merhaba') {
    msg.reply('Merhaba!');
  }
});
client.on('message', msg => {
  if (msg.content === '@Zappara TEST') {
    msg.reply('Efendim');
  }
});









client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const event = msg.content.toLower

  try {
    let commandFile = require(`./ozellikler/${command}.js`);
    commandFile.run(client, msg, args);
  } catch (err) {}
});


client.login(eks.token);
        

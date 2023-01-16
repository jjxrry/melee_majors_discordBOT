const { Client, GatewayIntentBits, Guild } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.on('ready', () => {
    console.log('Bot is ONLINE')
    client.channels.cache.get("1062981752236294188").send("Bot is ONLINE");
})

client.on('messageCreate', message => {
    if(message.content === 'mang0') {
        message.reply('the GOAT');
    }
    if(message.content === 'majors') {
        message.reply('https://meleemajors.com/');
    }
})

client.login(process.env.TOKEN);
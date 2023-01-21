const { default: axios } = require('axios')
const { Client, Events, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

// client.once(Events.ClientReady, c => {
//     console.log('Bot is ONLINE')
//     client.channels.cache.get("1062981752236294188").send(`Active as ${c.user.tag}`);
// })

client.login(process.env.TOKEN);
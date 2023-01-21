const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`${client.user.tag} is online!`)
        // client.channels.cache.get("1062981752236294188").send(`Active as ${c.user.tag}`)
    }
}
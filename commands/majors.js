const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('majors')
        .setDescription('Returns HTML link to meleemajors.com'),

    async execute(interaction) {
        await interaction.reply('https://meleemajors.com/');
    },
}
const {SlashCommandBuilder} = require('discord.js');
const { set } = require('mongoose');
const { execute } = require('./goat');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('majors')
        .setDescription('Returns HTML link to meleemajors.com'),

    async execute(interaction) {
        await interaction.reply('https://meleemajors.com/');
    },
}
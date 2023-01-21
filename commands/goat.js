const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goat')
		.setDescription('Replies with the kid.'),
		
	async execute(interaction) {
		await interaction.reply('MANG0');
	},
};
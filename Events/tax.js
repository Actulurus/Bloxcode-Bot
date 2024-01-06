const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
module.exports = function setup(interaction) {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName !== "tax") return;
    const amount = interaction.options.getInteger("amount");
    interaction.reply(`You need to make your gamepass **${Math.ceil(amount / .7)} Robux** to receive **${amount} Robux**.`);
};
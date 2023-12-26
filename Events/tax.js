const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
module.exports = function setup(interaction) {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName !== "tax") return;
    const amount = interaction.options.getInteger("amount");
    interaction.reply(`Roblox takes 30% **( ${amount * .3} Robux )** as tax so you will be getting 70% **(${amount * .7} Robux)**. You would need to make your gamepass **${(amount * .3) + amount} Robux** to receive **${amount} Robux**.`);
};
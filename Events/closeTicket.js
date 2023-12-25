const { ActionRowBuilder, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

module.exports = function closeTicket(interaction) {
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId !== "modal") return;
    const reason = interaction.fields.getTextInputValue("reason_input");
    const channel = interaction.guild.channels.cache.find(channel => channel.name === "bot");
    const embed = new EmbedBuilder()
        .setTitle(`Ticket${123} Close By ${interaction.user.username}`)
        .setDescription(`Reason: ${reason}`);
    interaction.channel.delete(reason);
    channel.send({ embeds: [embed] });
}
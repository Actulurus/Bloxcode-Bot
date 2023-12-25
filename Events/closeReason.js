const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

module.exports = function closeReason(interaction){
    if (!interaction.isButton()) return;
    if (interaction.customId !== "close") return;
    const modal = new ModalBuilder()
    .setCustomId(`modal`)
    .setTitle("Reason")

    const input = new TextInputBuilder()
    .setCustomId("reason_input")
    .setLabel("Reason to close Ticket")
    .setStyle(TextInputStyle.Paragraph)

    const row1 = new ActionRowBuilder()
    row1.addComponents(input)

    modal.addComponents(row1)

    interaction.showModal(modal)
}
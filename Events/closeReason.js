import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export default function closeReason(interaction){
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
import { ActionRowBuilder, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export default function closeTicket(interaction) {
    const reason = interaction.fields.getTextInputValue("reason_input");
    const channel = interaction.guild.channels.cache.find(channel => channel.name === "bot");
    const embed = new EmbedBuilder()
        .setTitle(`Ticket${123} Close By ${interaction.user.username}`)
        .setDescription(`Reason: ${reason}`);
    interaction.channel.delete(reason);
    channel.send({ embeds: [embed] });
}
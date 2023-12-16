import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
export default function setup(channel, title, description, buttonText, image, color) {
    const newEmbed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description);

    if (color) {
        newEmbed.setColor(color);
    }

    if (image) {
        newEmbed.setImage(image);
    }

    const row = new ActionRowBuilder();


    const orderButton = new ButtonBuilder()
        .setCustomId("order_button")
        .setStyle(ButtonStyle.Success)
        .setLabel(buttonText)
        .setEmoji("📦");

    row.addComponents(orderButton);

    channel.send({ embeds: [newEmbed], components: [row] });
}
import { ButtonBuilder, EmbedBuilder } from "discord.js";
export default function setup(channel, title, description, buttonText, image, color) {
    const orderButton = new ButtonBuilder()
        .setLabel(buttonText);

    channel.send({ embeds: [] });
}
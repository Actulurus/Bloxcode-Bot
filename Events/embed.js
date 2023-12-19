import { EmbedBuilder } from "discord.js";
import client from "../client.js";

export default function sendEmbed(interaction) {
    const channel = interaction.options.getChannel("channel");
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const color = interaction.options.getString("color");
    const image = interaction.options.getString("image");
    const thumbnail = interaction.options.getString("thumbnail");

    const newEmbed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description);

    if (color) {
        newEmbed.setColor(color);
    }

    if (image) {
        newEmbed.setImage(image);
    }
    if (thumbnail) {
        newEmbed.setThumbnail(thumbnail);
    }

    try {
        channel.send({ embeds: [newEmbed] });
    } catch (err) {
        console.error(err);
    }

    interaction.reply({ content: `Created Embed in ${channel.name}!`, ephemeral: true });
}
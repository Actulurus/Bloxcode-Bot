import { EmbedBuilder } from "discord.js";
import client from "../client.js";

export default function sendEmbed(channel, title, description, color, image, thumbnail) {
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
}
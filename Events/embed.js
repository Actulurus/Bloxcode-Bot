import { EmbedBuilder } from "discord.js";
import client from "../client.js";

export default function sendEmbed(channel, title, description) {
    const newEmbed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description);
    try {
        
        channel.send({ embeds: [newEmbed] });
    } catch (err) {
        console.error(err);
    }
}
import { PermissionFlagsBits } from "discord.js";
import client from "./client.js";
import sendEmbed from "./Events/embed.js";

export default function eventHandler() {
    client.on("interactionCreate", (interaction) => {
        if (interaction.isChatInputCommand) {
            if (interaction.commandName === "ping") {
                interaction.reply("Pong!");
            } else if (interaction.commandName === "embed") {
                if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return;
                const channel = interaction.options.getChannel("channel");
                const title = interaction.options.getString("title");
                const description = interaction.options.getString("description");
                sendEmbed(channel, title, description);
                interaction.reply(`Created Embed in ${channel.name}`);
            }
        }
    });
}
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, EmbedBuilder, PermissionFlagsBits } from "discord.js";
import client from "./client.js";
import sendEmbed from "./Events/embed.js";
import setup from "./Events/setup.js";
import Ticket from "./Events/ticket.js"

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
                const color = interaction.options.getString("color");
                const image = interaction.options.getString("image");
                const thumbnail = interaction.options.getString("thumbnail");
                sendEmbed(channel, title, description, color, image, thumbnail);
                interaction.reply({ content: `Created Embed in ${channel.name}!`, ephemeral: true });
            } else if (interaction.commandName === "setup") {
                const channel = interaction.options.getChannel("channel");
                const title = interaction.options.getString("title");
                const description = interaction.options.getString("description");
                const color = interaction.options.getString("color");
                const image = interaction.options.getString("image");
                const text = interaction.options.getString("button_text");
                setup(channel, title, description, text, image, color);
                interaction.reply({ content: `Setup in ${channel.name}!`, ephemeral: true });
            } else if (interaction.isButton()) {
                if (interaction.customId === "order_button") {
                   Ticket()
                   
                }

            }
        }
    });
}
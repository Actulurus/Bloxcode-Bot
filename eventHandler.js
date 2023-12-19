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
                sendEmbed(interaction);
            } else if (interaction.commandName === "setup") {
                setup(interaction)
            } else if (interaction.isButton()) {
                if (interaction.customId === "order_button") {
                   Ticket() 
                }

            }
        }
    });
}
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, EmbedBuilder, PermissionFlagsBits } from "discord.js";
import client from "./client.js";
import sendEmbed from "./Events/embed.js";
import setup from "./Events/setup.js";
import Ticket from "./Events/ticket.js";
import closeReason from "./Events/closeReason.js";
import closeTicket from "./Events/closeTicket.js";
import claim from "./Events/claim.js";

export default function eventHandler() {
    client.on("interactionCreate", (interaction) => {
        if (interaction.isChatInputCommand) {
            if (interaction.commandName === "ping") {
                interaction.reply("Pong!");
            } else if (interaction.commandName === "embed") {
                if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return;
                sendEmbed(interaction);
            } else if (interaction.commandName === "setup") {
                setup(interaction);
            } else if (interaction.isButton()) {
                if (interaction.customId === "order_button") {
                    Ticket(interaction);
                } else if (interaction.customId === "close") {
                    closeReason(interaction);
                } else if (interaction.customId === "claim") {
                    claim(interaction);
                }
            } else if (interaction.isModalSubmit()) {
                if (interaction.customId === "modal") {
                    closeTicket(interaction);
                }
            }
        }
    });
}
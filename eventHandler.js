import { ChannelType, PermissionFlagsBits } from "discord.js";
import client from "./client.js";
import sendEmbed from "./Events/embed.js";
import setup from "./Events/setup.js";

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
                    interaction.guild.channels.create({
                        name: `ticket`,
                        type: ChannelType.GuildText,
                        permissionOverwrites: [
                            {
                                id: interaction.user.id,
                                allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
                            },
                            {
                                id: interaction.guild.roles.everyone.id,
                                deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
                            }
                        ]
                    }).then(channel => {
                        channel.send(`<@${interaction.user.id}> Please wait til someone reaches you.`);
                        interaction.reply({ content: `Created Ticket <#${channel.id}>`, ephemeral: true });
                    });
                }

            }
        }
    });
}
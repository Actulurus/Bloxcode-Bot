const { ButtonBuilder, ActionRowBuilder, EmbedBuilder, PermissionFlagsBits, ButtonStyle, ChannelType } = require("discord.js");
const ticketSchema = require("../Schemas/TicketSchema");

module.exports = async function Ticket(interaction) {
    if (!interaction.isButton()) return;
    if (interaction.customId !== "order_button") return;

    const row = new ActionRowBuilder();

    const close = new ButtonBuilder()
        .setLabel("Close")
        .setCustomId("close")
        .setStyle(ButtonStyle.Danger);
    const claim = new ButtonBuilder()
        .setLabel("Claim")
        .setCustomId("claim")
        .setStyle(ButtonStyle.Success);

    row.addComponents([close, claim]);
    const currentId = (await ticketSchema.find()).length + 1;
    let ticketName;
    const ticketDoc = await ticketSchema.create({ user: interaction.user.username, index: currentId });
    if (ticketDoc.index.toString().length == 1) {
        ticketName = `00${currentId.toString()}`;
    } else if (ticketDoc.index.toString().length == 2) {
        ticketName = `0${currentId.toString()}`;
    }
    const embed = new EmbedBuilder()
        .setTitle(`Ticket ${ticketName}`)
        .setDescription(`<@${interaction.user.id}> Please wait til someone reaches you.`);
    interaction.guild.channels.create({
        name: `ticket-${ticketName}`,
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
        channel.send({ embeds: [embed], components: [row] });
        interaction.reply({ content: `Created Ticket <#${channel.id}>`, ephemeral: true });
    });
};
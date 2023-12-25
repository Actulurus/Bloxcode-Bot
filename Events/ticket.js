const { ButtonBuilder, ActionRowBuilder, EmbedBuilder, PermissionFlagsBits, ButtonStyle, ChannelType } = require("discord.js");

module.exports = function Ticket(interaction) {
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

    const embed = new EmbedBuilder()
        .setTitle("Ticket")
        .setDescription(`<@${interaction.user.id}> Please wait til someone reaches you.`);

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
        channel.send({ embeds: [embed], components: [row] });
        interaction.reply({ content: `Created Ticket <#${channel.id}>`, ephemeral: true });
    });
};